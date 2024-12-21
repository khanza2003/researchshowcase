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
import View from './components/View'
import UserResearch from './pages/UserResearch'
import UserList from './pages/UserList'


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
        <Route path='/view' element={<View/>}/>
        <Route path="/research" element={<UserResearch/>} />
        <Route path='/favorite' element={<UserList/>}/>
      </>
      }
      <Route path='/*' element={<Pnf/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App