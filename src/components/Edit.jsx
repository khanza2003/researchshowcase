import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SERVER_BASE_URL from '../services/serverUrl';
import { updateResearchAPI } from '../services/allAPI';
import { editContextResearch } from '../context/ContextShare';

const Edit = ({ research }) => {
  // 'research' prop holds the research data to be displayed in the edit modal
  const { editResearchResponse, setEditResearchResponse } = useContext(editContextResearch);
  const [preview, setPreview] = useState("");
  const [uploadFileStatus, setUploadFileStatus] = useState(false);
  const [researchDetails, setResearchDetails] = useState({
    id: research?._id,
    title: research?.title,
    category: research?.category,
    description: research?.description,
    researchFile: ""
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (researchDetails.researchFile) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
        "text/markdown"
      ];
      if (validTypes.includes(researchDetails.researchFile.type)) {
        setUploadFileStatus(true);
        setPreview(researchDetails.researchFile.name); // Use file name as preview for non-image files
      } else {
        setUploadFileStatus(false);
        setResearchDetails({ ...researchDetails, researchFile: "" });
        alert("Unsupported file type! Please upload a valid file.");
      }
    }
  }, [researchDetails.researchFile]);

  const handleClose = () => {
    setShow(false);
    setResearchDetails({
      id: research?._id,
      title: research?.title,
      category: research?.category,
      description: research?.description,
      researchFile: ""
    });
  };

  const handleShow = () => {
    setShow(true);
    setResearchDetails({
      id: research?._id,
      title: research?.title,
      category: research?.category,
      description: research?.description,
      researchFile: ""
    });
  };

  const handleUpdateResearch = async () => {
    const { id, title, category, description, researchFile } = researchDetails;
    if (title && category && description) {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("category", category);
      reqBody.append("description", description);
      if (uploadFileStatus) {
        reqBody.append("researchFile", researchFile);
      } else {
        reqBody.append("researchFile", research?.researchFile);
      }

      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        };
        try {
          const result = await updateResearchAPI(id, reqBody, reqHeader);
          if (result.status === 200) {
            alert("Research updated successfully!");
            handleClose();
            setEditResearchResponse(result);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      alert("Please fill out the form completely!");
    }
  };

  return (
    <>
      <button onClick={handleShow} className='btn'>
        <i className='fa-solid fa-edit'></i>
      </button>
      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Research Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input
                  onChange={e => setResearchDetails({ ...researchDetails, researchFile: e.target.files[0] })}
                  style={{ display: 'none' }}
                  type="file"
                />
                <div className="file-preview">
                  {preview || research?.researchFile || "Upload Research File"}
                </div>
              </label>
              {!uploadFileStatus && (
                <div className="text-warning fw-bolder">
                  *Upload your research file (PDF) here!!!
                </div>
              )}
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input
                  value={researchDetails.title}
                  onChange={e => setResearchDetails({ ...researchDetails, title: e.target.value })}
                  className='form-control'
                  type="text"
                  placeholder='Research Title'
                />
              </div>
              <div className="mb-2">
                <input
                  value={researchDetails.category}
                  onChange={e => setResearchDetails({ ...researchDetails, category: e.target.value })}
                  className='form-control'
                  type="text"
                  placeholder='Research Category'
                />
              </div>
              <div className="mb-2">
                <textarea
                  value={researchDetails.description}
                  onChange={e => setResearchDetails({ ...researchDetails, description: e.target.value })}
                  className='form-control'
                  rows="4"
                  placeholder='Research Description'
                ></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpdateResearch} variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
