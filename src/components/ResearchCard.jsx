import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SERVER_BASE_URL from '../services/serverUrl';

const ResearchCard = ({ displayData, showCard,showInitially  }) => {
    const [show, setShow] = useState(showInitially || false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {showCard && (
                <div onClick={handleShow} className="btn shadow">
                    {/* Card content only displayed when showCard is true */}
                </div>
            )}
            {!showCard && (
                <i
                    className="fa-solid fa-eye text-white"
                    onClick={handleShow}
                    style={{ cursor: 'pointer' }}
                ></i>
            )}

            <Modal size="lg" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Research Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <iframe
                                src={`${SERVER_BASE_URL}/uploads/${displayData?.file}`}
                                width="100%"
                                height="400px"
                                title="Research Document"
                            ></iframe>
                        </div>
                        <div className="col-lg-6">
                            <h3 className='text-danger'>{displayData?.title}</h3>
                            <h6>
                                Category: <span className="text-danger">{displayData?.category}</span>
                            </h6>
                            <p style={{ textAlign: 'justify' }}>
                                <span className="fw-bolder">Research Description: </span>
                               <span className='text-danger'> {displayData?.description}</span>
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ResearchCard;
