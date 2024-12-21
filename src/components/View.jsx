import React, { useContext, useEffect, useState } from 'react';
import Header from './Header'; // Make sure to import the Header
import Add from './Add';
import Edit from './Edit';
import { deleteResearchAPI, userResearchAPI } from '../services/allAPI';
import { addResearchContext, editContextResearch } from '../context/ContextShare';
import ResearchCard from './ResearchCard';

const View = () => {
    const { editResearchResponse, setEditResearchResponse } = useContext(editContextResearch);
    const { addResearchResponse, setAddResearchResponse } = useContext(addResearchContext);

    const [userResearch, setUserResearch] = useState([]);

    useEffect(() => {
        getUserResearch();
    }, [addResearchResponse, editResearchResponse]);

    const getUserResearch = async () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            };
            try {
                const result = await userResearchAPI(reqHeader);
                if (result.status === 200) {
                    setUserResearch(result.data);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    const removeResearch = async (id) => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            };
            try {
                const result = await deleteResearchAPI(id, reqHeader);
                if (result.status === 200) {
                    getUserResearch();
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <>
            <Header/> {/* Add Header */}
            <div style={{marginTop:'50px'}} className="d-flex justify-content-between ">
                <h2 style={{color:'#FA5B3C'}}>All Research</h2>
                <div>
                    <Add />
                </div>
            </div>
            <div  className='mt-5'>
                {
                    userResearch.length > 0 ?
                        userResearch?.map(research => (
                            <div key={research?._id} className="border rounded p-2 d-flex justify-content-between mb-3">
                                <h3>{research?.title}</h3>
                                <div className="d-flex align-items-center">
                                <div><i className='fa-solid fa-eye text-danger'> <ResearchCard displayData={research} /></i></div>
                                    <div>
                                        <Edit research={research} />
                                    </div>

                                    <button style={{ color: 'black' }} onClick={() => removeResearch(research?._id)} className='btn'>
                                        <i className='fa-solid fa-trash text-danger'></i>
                                    </button>
                                </div>
                            </div>
                        ))
                        :
                        <div>You haven't uploaded any research yet....Add your research</div>
                }
            </div>
        </>
    );
};

export default View;
