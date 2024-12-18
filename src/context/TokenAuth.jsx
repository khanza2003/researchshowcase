import React, { createContext,useState,useEffect } from 'react'
export const tokenContext=createContext()

const TokenAuth = ({children}) => {
    const[autherisedUser,setAutherisedUser]=useState(false)

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setAutherisedUser(true)
        }else{
            setAutherisedUser(false)
        }
    },[autherisedUser])
  return (
    <>
    <tokenContext.Provider value={{autherisedUser,setAutherisedUser}}>
        {children}
    </tokenContext.Provider>
    </>
  )
}

export default TokenAuth