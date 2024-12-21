// import React, { useContext, useEffect, useState } from 'react'
// import Add from './Add'
// import Edit from './Edit'
// import { deleteResearchAPI, userResearchAPI } from '../services/allAPI'
// import { addResearchContext, editContextResearch } from '../context/ContextShare'

// const View = () => {
//     const { editResearchResponse, setEditResearchResponse } = useContext(editContextResearch)
//     const { addResearchResponse, setAddResearchResponse } = useContext(addResearchContext)
//     // to display user research
//     // create state to store user research
//     const [userResearch, setUserResearch] = useState([])
//     console.log(userResearch);

//     useEffect(() => {
//         getUserResearch()
//     }, [addResearchResponse, editResearchResponse])

//     // create a function for getting all research and call API inside that function store all user research inside state
//     const getUserResearch = async () => {
//         const token = sessionStorage.getItem("token")
//         if (token) {
//             const reqHeader = {
//                 "Authorization": `Bearer ${token}`
//             }
//             try {
//                 const result = await userResearchAPI(reqHeader)
//                 console.log(result);
//                 if (result.status === 200) {
//                     setUserResearch(result.data)
//                 }
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//     }

//     // call that user research getting function using useEffect
//     const removeResearch = async (id) => {
//         const token = sessionStorage.getItem("token")
//         if (token) {
//             const reqHeader = {
//                 "Authorization": `Bearer ${token}`
//             }
//             try {
//                 const result = await deleteResearchAPI(id, reqHeader)
//                 if (result.status === 200) {
//                     getUserResearch()
//                 }
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//     }

//     return (
//         <>
//             <div className="d-flex justify-content-between mt-3">
//                 <h2 className='text-warning'>All Research</h2>
//                 <div>
//                     <Add />
//                 </div>
//             </div>
//             <div className='mt-2'>
//                 {
//                     userResearch.length > 0 ?
//                         userResearch?.map(research => (
//                             <div key={research?._id} className="border rounded p-2 d-flex justify-content-between mb-3">
//                                 <h3>{research?.title}</h3>
//                                 <div className="d-flex align-items-center">
//                                     <div>
//                                         <Edit research={research} />
//                                     </div>

//                                     <button style={{color:'black'}} onClick={() => removeResearch(research?._id)} className='btn'>
//                                         <i  className='fa-solid fa-trash text-danger'></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                         :
//                         <div>You haven't uploaded any research yet....Add your research</div>
//                 }
//             </div>
//         </>
//     )
// }

// export default View

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import { Link } from 'react-router-dom';


const User = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).firstName.split(" ")[0]);
    }
  }, []);

  return (
    <>
      <Header insideUser={true} />
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-8">
            <h1>Welcome <span style={{color:"#FA5B3C"}}>{username}</span>,</h1>
            <Profile />
          </div>
          <div className='col-lg-2'></div>

          <div className='col-lg-2'> {/* Link to redirect to /favorite */}
            <Link to="/favorite">
              <button className="btn btn-primary shadow" style={{border:"none",color: 'red', textDecoration: 'none', background: 'white', borderRadius: '10px', padding: '10px 20px', fontSize: '16px',display: 'inline-block',transition: 'all 0.3s ease',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',marginBottom:'20px'}}to={'/user'} onMouseEnter={(e) => {e.target.style.background = 'linear-gradient(to right,rgb(243, 102, 73),rgb(248, 159, 71))';e.target.style.color = 'white';e.target.style.transform = 'translateY(-5px)';e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)'; }} onMouseLeave={(e) => {e.target.style.background = 'white';e.target.style.color = 'red'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';}}>Go to Favorites <i class="fa-solid fa-heart"></i></button>
            </Link></div>


        </div>
      </div>
    </>
  );
};

export default User;
