import React, { useContext, useState } from 'react'
import userimage from '../assets/user1.png'
import { Form,FloatingLabel,Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'
import TokenAuth, { tokenContext } from '../context/TokenAuth'


const Auth = ({insideRegister}) => {
   const {autherisedUser,setAutherisedUser}=useContext(tokenContext)
  const[isLogin,setIsLogin]=useState(false)
  const navigate=useNavigate()
  const [userInput,setUserInput]=useState({
    firstname:"", lastname:"", email:"", password:""
  })
  console.log(userInput);

  const register=async(e)=>{
   e.preventDefault()
   if(userInput.firstname && userInput.lastname && userInput.password && userInput.email){
    // api call
    try{
      const result=await registerAPI(userInput)
      if(result.status==200){
        alert(`Welcome ${result.data?.firstname}, Please login to explore our research!!!`)
        navigate("/login")
        setUserInput({firstname:"", lastname:"", email:"", password:""})
      }else{
        if(result.response.status==406){
          alert(result.response.data)
          setUserInput({firstname:"", lastname:"", email:"", password:""})
        }
      }
    }catch(err){
      console.log(err);
    }
   }else{
    alert("Please fill the form completely")
   }
  }

  const login=async(e)=>{
    e.preventDefault()
    if(userInput.password && userInput.email){
     // api call
     try{
       const result=await loginAPI(userInput)
       if(result.status==200){
        sessionStorage.setItem("user",JSON.stringify(result.data.user))
        sessionStorage.setItem("token",result.data.token)
        setIsLogin(true)
        setAutherisedUser(true)
        setTimeout(() => {
          navigate("/")
         setUserInput({firstname:"", lastname:"", email:"", password:""})
         setIsLogin(false)
        }, 2000);
       }else{
         if(result.response.status==404){
           alert(result.response.data)
         }
       }
     }catch(err){
       console.log(err);
     }
    }else{
     alert("Please fill the form completely")
    }
   }

  
  return ( 
    <div style={{minHeight:'100vh',background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)' ,display: 'grid', placeItems: 'center'}}>
    <div className='container'style={{ position: 'relative' ,marginTop:'35px'}}>
    <div>
        <img style={{width:'300px',position: 'absolute', top: '-90px',  transform: 'translateX(-40%)', zIndex: '1',marginLeft:'600px' }} src={userimage} alt="no" />
    </div>
      <div className='card shadow p-4 w-75' style={{marginLeft:"170px",marginTop:'80px'}}>
        <div>
              <h1 style={{textAlign:"center"}} className='my-2'>Student Research Showcase</h1>
              <h5 style={{color:'#FA5B3C'}}>Sign {insideRegister?'Up' :'In'} to your account</h5>
              <Form>
                {
                  insideRegister &&
                   <FloatingLabel controlId="floatingInputFirstName" label="👤 First Name" className='mb-3'>
                   <Form.Control value={userInput.firstname} onChange={e=>setUserInput({...userInput,firstname:e.target.value})} type="text" placeholder="First Name" />
                   </FloatingLabel>
                }
                {
                  insideRegister &&
                   <FloatingLabel controlId="floatingInputLastName" label=" &nbsp; &nbsp;&nbsp; Last Name" className='mb-3'>
                   <Form.Control value={userInput.lastname} onChange={e=>setUserInput({...userInput,lastname:e.target.value})} type="text" placeholder="Last Name" />
                   </FloatingLabel>
                }
              <FloatingLabel
                  controlId="floatingInput"
                  label="✉️Email address"
                  className="mb-3">
             <Form.Control value={userInput.email} onChange={e=>setUserInput({...userInput,email:e.target.value})} type="email" placeholder="Email Address" />
             </FloatingLabel>
             <FloatingLabel controlId="floatingPassword" label="🔒Password" className='mb-2'>
             <Form.Control value={userInput.password} onChange={e=>setUserInput({...userInput,password:e.target.value})} type="password" placeholder="Password" />
             </FloatingLabel>

             {
              insideRegister ?
              <div className='mt-3'>
                <p>Existing User ? Please click here to <Link to={'/login'}>Login</Link></p>

              </div>
              :
              <div>
                <p>New User ? Please click here to <Link to={'/register'}>Register</Link></p>
              </div>
             }

              </Form>

            </div>

          </div>
          <div style={{background:"white",width:'750px',height:"100px",borderRadius:'10px',padding:'30px',marginLeft:'280px',marginTop:"-10px"}}>
            {insideRegister?
            <button onClick={register} className='btn btn-primary mb-2 shadow ' style={{width:'600px',marginLeft:'40px'}}>Register</button>:
            <button onClick={login} className='btn btn-primary mb-2 mb-2 shadow ms-5' style={{width:'600px',marginLeft:'40px'}}>Login
            </button>}
            </div>
        </div>


        {/* Responsive Styling */}
<style jsx>{`
  @media (max-width: 768px) {
    .user-image {
      display: none;
    }
    .container {
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding: 20px;
    }
    .card {
      margin-left: 0 !important;
      width: 100% !important;
      padding: 10px;
    }
    h1 {
      font-size: 24px;
    }
    .form-control {
      font-size: 14px;
    }
    .btn {
      width: 100% !important;
      font-size: 16px;
    }
    .button-container {
      width: 300px !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 10px;
    }
    .card {
      width: 100% !important;
    }
    h1 {
      font-size: 20px;
    }
    .form-control {
      font-size: 12px;
    }
  }
`}</style>


      </div>
    
  )
}

export default Auth
