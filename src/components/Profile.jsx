import React, { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import uploadImg from '../assets/user1.png';
import SERVER_BASE_URL from '../services/serverUrl';
import { updateUserAPI } from '../services/allAPI';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const [preview, setPreview] = useState("");
    const [existingProfilePic, setExistingProfilePic] = useState("");
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        dateOfBirth: "",
        education: "",
        profilePic: "",
    });

    // Fetch existing user details from session storage
    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            const user = JSON.parse(sessionStorage.getItem("user"));
            setUserDetails({
                ...userDetails,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                address: user.address,
                dateOfBirth: user.dateOfBirth,
                education: user.education,
            });
            setExistingProfilePic(user.profilePic);
        }
    }, [open]);

    // Generate preview for profile picture
    useEffect(() => {
        if (userDetails.profilePic) {
            setPreview(URL.createObjectURL(userDetails.profilePic));
        } else {
            setPreview("");
        }
    }, [userDetails.profilePic]);

    const handleUserUpdate = async () => {
        const { firstName, lastName, email, phone, address, dateOfBirth, education, profilePic } = userDetails;

        if (firstName && lastName && email && phone && address && dateOfBirth && education) {
            const reqBody = new FormData();
            reqBody.append("firstName", firstName);
            reqBody.append("lastName", lastName);
            reqBody.append("email", email);
            reqBody.append("phone", phone);
            reqBody.append("address", address);
            reqBody.append("dateOfBirth", dateOfBirth);
            reqBody.append("education", education);
            preview
                ? reqBody.append("profilePic", profilePic)
                : reqBody.append("profilePic", existingProfilePic);

            const token = sessionStorage.getItem("token");
            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                };

                try {
                    const result = await updateUserAPI(reqBody, reqHeader);
                    if (result.status === 200) {
                        alert("User profile updated successfully!");
                        sessionStorage.setItem("user", JSON.stringify(result.data));
                        setOpen(!open);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            alert("Please fill out all the fields!");
        }
    };

    return (
        <>
            <div className="d-flex justify-content-evenly">
                <h3 className='text-warning'>Profile</h3>
                <button onClick={() => setOpen(!open)} className='btn text-warning'>
                    <i className='fa-solid fa-chevron-down'></i>
                </button>
            </div>
            <Collapse in={open}>
                <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded' id="example-collapse-text">
                    <label className='text-center mb-2'>
                        <input
                            onChange={(e) => setUserDetails({ ...userDetails, profilePic: e.target.files[0] })}
                            style={{ display: 'none' }}
                            type="file"
                        />
                        {
                            existingProfilePic === "" ? (
                                <img
                                    src={preview ? preview : uploadImg}
                                    width={'200px'}
                                    height={'200px'}
                                    className='rounded circle'
                                    alt="Profile"
                                />
                            ) : (
                                <img
                                    width={'200px'}
                                    height={'200px'}
                                    className='rounded circle'
                                    src={preview ? preview : `${SERVER_BASE_URL}/uploads/${existingProfilePic}`}
                                    alt="Profile"
                                />
                            )
                        }
                    </label>
                    <div className="mb-2 w-100">
                        <input
                            value={userDetails.firstName}
                            onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
                            type="text"
                            placeholder='First Name'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 w-100">
                        <input
                            value={userDetails.lastName}
                            onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
                            type="text"
                            placeholder='Last Name'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 w-100">
                        <input
                            value={userDetails.email}
                            readOnly
                            type="email"
                            placeholder='Email'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 w-100">
                        <input
                            value={userDetails.phone}
                            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                            type="text"
                            placeholder='Phone'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 w-100">
                        <input
                            value={userDetails.address}
                            onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                            type="text"
                            placeholder='Address'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 w-100">
                        <input
                            value={userDetails.dateOfBirth}
                            onChange={(e) => setUserDetails({ ...userDetails, dateOfBirth: e.target.value })}
                            type="date"
                            placeholder='Date of Birth'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 w-100">
                        <input
                            value={userDetails.education}
                            onChange={(e) => setUserDetails({ ...userDetails, education: e.target.value })}
                            type="text"
                            placeholder='Education'
                            className='form-control'
                        />
                    </div>
                    <div className='d-grid w-100'>
                        <button onClick={handleUserUpdate} className='btn btn-danger'>Update</button>
                    </div>
                </div>
            </Collapse>
        </>
    );
};

export default Profile;
