// import React, { useEffect, useState } from 'react';
// import uploadImg from '../assets/user1.png';
// import SERVER_BASE_URL from '../services/serverUrl';
// import { updateUserAPI } from '../services/allAPI';

// const Profile = () => {
//     const [preview, setPreview] = useState("");
//     const [existingProfilePic, setExistingProfilePic] = useState("");
//     const [userDetails, setUserDetails] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         address: "",
//         dateOfBirth: "",
//         education: "",
//         profilePic: "",
//     });

//     // Fetch existing user details from session storage
//     useEffect(() => {
//         if (sessionStorage.getItem("user")) {
//             const user = JSON.parse(sessionStorage.getItem("user"));
//             setUserDetails({
//                 ...userDetails,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 email: user.email,
//                 phone: user.phone,
//                 address: user.address,
//                 dateOfBirth: user.dateOfBirth,
//                 education: user.education,
//             });
//             setExistingProfilePic(user.profilePic);
//         }
//     }, []);

//     // Generate preview for profile picture
//     useEffect(() => {
//         if (userDetails.profilePic) {
//             setPreview(URL.createObjectURL(userDetails.profilePic));
//         } else {
//             setPreview("");
//         }
//     }, [userDetails.profilePic]);

//     const handleUserUpdate = async () => {
//         const { firstName, lastName, email, phone, address, dateOfBirth, education, profilePic } = userDetails;

//         if (firstName && lastName && email && phone && address && dateOfBirth && education) {
//             const reqBody = new FormData();
//             reqBody.append("firstName", firstName);
//             reqBody.append("lastName", lastName);
//             reqBody.append("email", email);
//             reqBody.append("phone", phone);
//             reqBody.append("address", address);
//             reqBody.append("dateOfBirth", dateOfBirth);
//             reqBody.append("education", education);
//             preview
//                 ? reqBody.append("profilePic", profilePic)
//                 : reqBody.append("profilePic", existingProfilePic);

//             const token = sessionStorage.getItem("token");
//             if (token) {
//                 const reqHeader = {
//                     "Content-Type": "multipart/form-data",
//                     Authorization: `Bearer ${token}`,
//                 };

//                 try {
//                     const result = await updateUserAPI(reqBody, reqHeader);
//                     if (result.status === 200) {
//                         alert("User profile updated successfully!");
//                         sessionStorage.setItem("user", JSON.stringify(result.data));
//                     }
//                 } catch (err) {
//                     console.log(err);
//                 }
//             }
//         } else {
//             alert("Please fill out all the fields!");
//         }
//     };

//     return (
//         <>
//             <div className="d-flex justify-content-evenly">
//                 <h3 className='text-warning'>Profile</h3>
//             </div>
//             <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded'>
//                 <label className='text-center mb-2'>
//                     <input
//                         onChange={(e) => setUserDetails({ ...userDetails, profilePic: e.target.files[0] })}
//                         style={{ display: 'none' }}
//                         type="file"
//                     />
//                     {
//                         existingProfilePic === "" ? (
//                             <img
//                                 src={preview ? preview : uploadImg}
//                                 width={'200px'}
//                                 height={'200px'}
//                                 className='rounded circle'
//                                 alt="Profile"
//                             />
//                         ) : (
//                             <img
//                                 width={'200px'}
//                                 height={'200px'}
//                                 className='rounded circle'
//                                 src={preview ? preview : `${SERVER_BASE_URL}/uploads/${existingProfilePic}`}
//                                 alt="Profile"
//                             />
//                         )
//                     }
//                 </label>
//                 <h1 style={{ textAlign: 'center', color: 'orange' }}>{userDetails.firstName} {userDetails.lastName}</h1>
//                 <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                     <h5>FirstName:</h5>
//                     <input
//                         value={userDetails.firstName}
//                         onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
//                         type="text"
//                         placeholder='First Name'
//                         className='form-control'
//                     />
//                 </div>
//                 <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                     <h5>LastName:</h5>
//                     <input
//                         value={userDetails.lastName}
//                         onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
//                         type="text"
//                         placeholder='Last Name'
//                         className='form-control'
//                     />
//                 </div>
//                 <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '45px' }}>
//                     <h5>Email:</h5>
//                     <input
//                         value={userDetails.email}
//                         readOnly
//                         type="email"
//                         placeholder='Email'
//                         className='form-control'
//                     />
//                 </div>
//                 <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '39px' }}>
//                     <h5>Phone:</h5>
//                     <input
//                         value={userDetails.phone}
//                         onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
//                         type="text"
//                         placeholder='Phone'
//                         className='form-control'
//                     />
//                 </div>
//                 <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '27px' }}>
//                     <h5>Address:</h5>
//                     <input
//                         value={userDetails.address}
//                         onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
//                         type="text"
//                         placeholder='Address'
//                         className='form-control'
//                     />
//                 </div>
//                 <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                     <h5>Education:</h5>
//                     <input
//                         value={userDetails.education}
//                         onChange={(e) => setUserDetails({ ...userDetails, education: e.target.value })}
//                         type="text"
//                         placeholder='Education'
//                         className='form-control'
//                     />
//                 </div>
//                 <div className='d-grid w-100' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                     <button onClick={handleUserUpdate} className='btn btn-danger'>Update</button>
//                     <button className='btn btn-danger'>My Research</button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Profile;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import uploadImg from '../assets/user.gif'; // Default image for profile
import SERVER_BASE_URL from '../services/serverUrl'; // Replace with your server URL
import { updateUserAPI } from '../services/allAPI'; // API function for updating user

const Profile = () => {
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
    }, []);

    useEffect(() => {
        if (userDetails.profilePic) {
            setPreview(URL.createObjectURL(userDetails.profilePic));
        } else {
            setPreview("");
        }
    }, [userDetails.profilePic]);

    const handleUserUpdate = async () => {
        const { firstName, lastName, email, phone, address, dateOfBirth, education, profilePic } = userDetails;

        if (firstName && lastName && email && phone && address && education) {
            const reqBody = new FormData();
            reqBody.append("firstName", firstName);
            reqBody.append("lastName", lastName);
            reqBody.append("email", email);
            reqBody.append("phone", phone);
            reqBody.append("address", address);
           // reqBody.append("dateOfBirth", dateOfBirth);
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
            <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded' style={{marginLeft:"250px",background:'linear-gradient(to right, #FA5B3C, #FFD2A6)'}}>
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
                                className='rounded-circle'
                                alt="Profile"
                            />
                        ) : (
                            <img
                                width={'200px'}
                                height={'200px'}
                                className='rounded-circle'
                                src={preview ? preview : `${SERVER_BASE_URL}/uploads/${existingProfilePic}`}
                                alt="Profile"
                            />
                        )
                    }
                </label>
                <h1 style={{ textAlign: 'center', color: 'rgb(48, 37, 37)' ,fontFamily:"Libre Baskerville", }}>{userDetails.firstName} {userDetails.lastName}</h1>
                <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <strong>FirstName:&nbsp;</strong>
                    <input
                        value={userDetails.firstName}
                        onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
                        type="text"
                        placeholder='First Name'
                        className='form-control'
                    />
                </div>
                <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <strong>LastName:&nbsp;</strong>
                    <input
                        value={userDetails.lastName}
                        onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
                        type="text"
                        placeholder='Last Name'
                        className='form-control'
                    />
                </div>
                <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <strong>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                    <input
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                        type="email"
                        placeholder='Email'
                        className='form-control'
                    />
                </div>
                <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <strong>Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                    <input
                        value={userDetails.phone}
                        onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                        type="text"
                        placeholder='Phone'
                        className='form-control'
                    />
                </div>
                <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <strong>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                    <input
                        value={userDetails.address}
                        onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                        type="text"
                        placeholder='Address'
                        className='form-control'
                    />
                </div>
                <div className="mb-2 w-100" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <strong>Education:</strong>
                    <input
                        value={userDetails.education}
                        onChange={(e) => setUserDetails({ ...userDetails, education: e.target.value })}
                        type="text"
                        placeholder='Education'
                        className='form-control'
                    />
                </div>
                <div className='d-grid w-100' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={handleUserUpdate} className='btn shadow' style={{marginTop:"15px",color: 'black', textDecoration: 'none', background: 'white', borderRadius: '10px', padding: '10px 20px', fontSize: '16px',display: 'inline-block',transition: 'all 0.3s ease',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',marginBottom:'20px'}}to={'/user'} onMouseEnter={(e) => {e.target.style.background = 'linear-gradient(to right,rgb(244, 92, 62),rgb(248, 169, 90))';e.target.style.color = 'white';e.target.style.transform = 'translateY(-5px)';e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)'; }} onMouseLeave={(e) => {e.target.style.background = 'white';e.target.style.color = 'black'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';}}>Update</button>
                    <Link to="/view">
                        <button className='btn w-100 shadow' style={{border:"none",color: 'black', textDecoration: 'none', background: 'white', borderRadius: '10px', padding: '10px 20px', fontSize: '16px',display: 'inline-block',transition: 'all 0.3s ease',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',marginBottom:'20px'}}to={'/user'} onMouseEnter={(e) => {e.target.style.background = 'linear-gradient(to right,rgb(243, 102, 73),rgb(248, 159, 71))';e.target.style.color = 'white';e.target.style.transform = 'translateY(-5px)';e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)'; }} onMouseLeave={(e) => {e.target.style.background = 'white';e.target.style.color = 'black'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';}}>My Research</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Profile;
