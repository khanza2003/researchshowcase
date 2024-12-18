import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import User from './pages/User'
import Research from './pages/Research'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import Pnf from './pages/Pnf'
import { useContext } from 'react'
import { tokenContext } from './context/TokenAuth'
import UserResearch from './components/UserResearch'

function App() {
  const{autherisedUser,setAutherisedUser}=useContext(tokenContext)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister={true}/>}/>
     {autherisedUser && 
      <>
        <Route path='/user' element={<User/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/user-research' element={<UserResearch/>}/>
      </>
      }
      <Route path='/*' element={<Pnf/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App