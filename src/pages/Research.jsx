import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import {Row,Col} from 'react-bootstrap'
import ResearchCard from '../components/ResearchCard'
import { allResearchAPI } from '../services/allAPI'

const Researches = () => {
  const[searchKey,setSearchKey]=useState("")
  const [allResearches,setAllResearch]=useState([])
  console.log(allResearches);
  useEffect(()=>{
    getAllResearches()
  },[searchKey])
  const getAllResearches=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Authorization":`Bearer ${token}`
      }
      try{
        const result=await allResearchAPI(reqHeader,searchKey)
        console.log(result);
        if(result.status==200){
          setAllResearch(result.data)
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center py-5">
        <h1>All Researches</h1>
        <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search Researches by their Language' className='form-control w-25'/>
      </div>
      <Row>
        {
          allResearches.length>0?
          allResearches?.map(research=>(
            <Col key={research?._id} className='mb-3' sm={12} md={6} lg={4}>
            <ResearchCard displayData={research}/>
          </Col>
           )):
          <div className='fw-bolder text-danger'>Research Not Found!!!</div>
          }
      </Row>
    </div>
    </>
  )
}

export default Researches
