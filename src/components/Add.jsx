import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import uploadimg from '../assets/image2.png';
import { addResearchAPI } from '../services/allAPI';
import { addResearchContext } from '../context/ContextShare';

const Add = () => {
  const { addResearchResponse, setAddResearchResponse } = useContext(addResearchContext);
  const [preview, setPreview] = useState("");
  const [uploadFileStatus, setUploadFileStatus] = useState(false);
  const [researchDetails, setResearchDetails] = useState({
    title: "",
    category: "",
    description: "",
    researchFile: ""
  });
  const [show, setShow] = useState(false);

  console.log(researchDetails);

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
        setPreview(URL.createObjectURL(researchDetails.researchFile));
      } else {
        setUploadFileStatus(false);
        setResearchDetails({ ...researchDetails, researchFile: "" });
        alert("Unsupported file type! Please upload a valid file.");
      }
    }
  }, [researchDetails.researchFile]);

  const handleClose = () => {
    setShow(false);
    setPreview("");
    setUploadFileStatus(false);
    setResearchDetails({ title: "", category: "", description: "", researchFile: "" });
  };

  const handleShow = () => setShow(true);

  const handleAddResearch = async () => {
    const { title, category, description, researchFile } = researchDetails;
    if (title && category && description && researchFile) {
      // API call
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("category", category);
      reqBody.append("description", description);
      reqBody.append("researchFile", researchFile);

      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        };
        // Make API call
        try {
          const result = await addResearchAPI(reqBody, reqHeader);
          console.log(result);
          if (result.status === 200) {
            alert(`${result?.data?.title} uploaded successfully!`);
            handleClose();
            // Share result to view via context
            setAddResearchResponse(result);
          } else {
            if (result.response?.status === 406) {
              alert(result.response.data);
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      alert("Please fill the form completely!");
    }
  };

  return (
    <>
      <button onClick={handleShow} className='btn btn-primary'>+ New Research</button>
      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Research Details!</Modal.Title>
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
                <img className='img-fluid' height={'200px'} src={preview || uploadimg} alt="" />
              </label>
              {!uploadFileStatus &&
                <div className="text-danger fw-bolder">
                  *Upload your research file (PDF) here!!!
                </div>}
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
  <select
    value={researchDetails.category}
    onChange={e => setResearchDetails({ ...researchDetails, category: e.target.value })}
    className="form-control"
  >
    <option value="">Select Research Category</option>
    <option value="Science">Science</option>
    <option value="Art">Art</option>
    <option value="Technology">Technology</option>
  </select>
  {!['Science', 'Art', 'Technology'].includes(researchDetails.category) && (
    <div className="fw-bolder text-danger">
      {/*Research Category must be (Science, Art, Technology)!!*/}
    </div>
  )}
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
          <Button onClick={handleAddResearch} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
