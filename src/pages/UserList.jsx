import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Row, Col } from 'react-bootstrap';
import ResearchCard from '../components/ResearchCard';
import knowmore from '../assets/knowmore.gif'
import { getFavoriteResearchAPI, removeFromFavoriteAPI } from '../services/allAPI'; // API imports for fetching and removing from favorites

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`,
      };
      try {
        const result = await getFavoriteResearchAPI(reqHeader);
        if (result.status === 200) {
          setFavorites(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleUnfavorite = async (researchId) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`,
      };
      try {
        const result = await removeFromFavoriteAPI({ researchId }, reqHeader);
        if (result.status === 200) {
          setFavorites((prev) => prev.filter((research) => research._id !== researchId));
          alert(`Research has been removed from your favorites!`)
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid" style={{paddingTop:'20px'}}>
        <h1>Favorite Researches</h1>
        <Row>
          {
            favorites.length > 0 ?
              favorites.map((research) => (
                <Col key={research?._id} className="mb-3" sm={12} md={6} lg={4}>
                  <div className="shadow" style={{ background: 'white', height: '220px', textAlign: 'center' }}>
                    <h1 style={{ color: '#FA5B3C', fontWeight: '900' }}>{research.title}</h1>
                   
                      <div style={{marginTop:'-10px'}}><ResearchCard displayData={research} /> <br />
                      <img style={{width:'200px'}} src={knowmore} alt="" />
                      </div>
                      <div >
                        <h4>{research.category}</h4>
  
                        {/* Unfavorite Button */}
                        <button style={{border:'none',background:'none'}} onClick={() => handleUnfavorite(research._id)}><i class="fa-solid fa-heart-circle-minus fa-xl" style={{color:" #fb0404"}}></i></button>
                     
                      </div>
                  </div>
                </Col>
              )) :
              <div className="fw-bolder text-danger">No Favorite Research Found!!!</div>
          }
        </Row>
        <div style={{minHeight:'180px'}}></div>
      </div>
    </>
  );
};

export default Favorite;
