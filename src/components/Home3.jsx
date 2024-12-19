// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// const Home3 = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [reviews, setReviews] = useState([
//     { username: 'User', review: 'Great app!', rating: 5 },
//     { username: 'User', review: 'Could be better.', rating: 3 },
//   ]);
//   const [newReview, setNewReview] = useState({ review: '', rating: 0 });

//   const handleStarClick = (index) => {
//     setNewReview({ ...newReview, rating: index + 1 });
//   };

//   const handleSubmit = () => {
//     if (newReview.review) {
//       setReviews([...reviews, { username: 'User', ...newReview }]);
//       setNewReview({ review: '', rating: 0 });
//       setShowModal(false);
//     } else {
//       alert('Please write your review!');
//     }
//   };

//   return (
//    <div className='container'>
//         <div
//           style={{
//             width:'100%',
//             background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)',
//             padding: '20px',
//             paddingBottom: '60px', // Space for the bottom button
//             borderRadius: '10px',
//             marginTop: '50px',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
//             position: 'relative',
//           }}
//         >
//           <h2 style={{ color: 'white' }}>User Reviews</h2>
    
//           <Button
//             variant="light"
//             className="shadow"
//             style={{
//               position: 'absolute',
//               top: '20px',
//               right: '20px',
//               borderRadius: '10px',
//               padding: '10px 20px',
//               fontSize: '16px',
//               display: 'inline-block',
//               transition: 'all 0.3s ease',
//               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//               background: 'white',
//               color: 'black',
//               textDecoration: 'none',
//               marginTop: '-10px',
//             }}
//             onClick={() => setShowModal(true)}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'linear-gradient(to right, #FA5B3C, #FFD2A6)';
//               e.target.style.color = 'white';
//               e.target.style.transform = 'translateY(-5px)';
//               e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'white';
//               e.target.style.color = 'black';
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
//             }}
//           >
//             Add Review
//           </Button>
    
//           <div>
//             {reviews.map((review, index) => (
//               <div
//                 key={index}
//                 style={{
//                   background: 'white',
//                   padding: '15px',
//                   borderRadius: '10px',
//                   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                   marginBottom: '15px',
//                 }}
//               >
//                 <h4>{review.username}</h4>
//                 <p>{review.review}</p>
//                 <div style={{ color: 'gold' }}>
//                   {'★'.repeat(review.rating)}
//                   {'☆'.repeat(5 - review.rating)}
//                 </div>
//               </div>
//             ))}
//           </div>
    
//           {/* Modal for adding a new review */}
//           <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//             <Modal.Header closeButton>
//               <Modal.Title>Add Your Review</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form>
//                 {/* Review Text Area */}
//                 <Form.Group className="mb-3">
//                   <Form.Label>Your Review</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={3}
//                     placeholder="Write your review"
//                     value={newReview.review}
//                     onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
//                   />
//                 </Form.Group>
    
//                 {/* Star Rating */}
//                 <Form.Group>
//                   <Form.Label>Rating</Form.Label>
//                   <div>
//                     {[...Array(5)].map((_, index) => (
//                       <span
//                         key={index}
//                         style={{
//                           fontSize: '24px',
//                           cursor: 'pointer',
//                           color: newReview.rating > index ? 'yellow' : 'gray',
//                           marginRight: '5px',
//                           transition: 'color 0.2s',
//                         }}
//                         onClick={() => handleStarClick(index)}
//                       >
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                 </Form.Group>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={() => setShowModal(false)}>
//                 Close
//               </Button>
//               <Button
//                 style={{
//                   background: 'orange',
//                   color: 'white',
//                   border: 'none',
//                 }}
//                 onClick={handleSubmit}
//               >
//                 ✓
//               </Button>
//             </Modal.Footer>
//           </Modal>
    
//           {/* Bottom-Center Button */}
//           <Button
//             variant="light"
//             className="shadow"
//             style={{
//               position: 'absolute',
//               bottom: '10px', // Adjusted spacing from the bottom
//               left: '50%',
//               transform: 'translateX(-50%)',
//               borderRadius: '10px',
//               padding: '10px 20px',
//               fontSize: '16px',
//               display: 'inline-block',
//               transition: 'all 0.3s ease',
//               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//               background: 'white',
//               color: 'black',
//               textDecoration: 'none',
//             }}
//             onClick={() => {
//               window.location.href = '/review'; // Replace with navigation logic
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'linear-gradient(to right, #FA5B3C, #FFD2A6)';
//               e.target.style.color = 'white';
//               e.target.style.transform = 'translateY(-5px)';
//               e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'white';
//               e.target.style.color = 'black';
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
//             }}
//           >
//             Go to Reviews
//           </Button>
//         </div>
//    </div>
//   );
// };

// export default Home3;





// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { getReviewsAPI, addReviewAPI, updateReviewAPI, deleteReviewAPI } from '../services/allAPI'; // Import your API functions

// const Home3 = ({ user }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [reviews, setReviews] = useState([]); // Default to an empty array
//   const [newReview, setNewReview] = useState({ review: '', rating: 0 });

//   useEffect(() => {
//     // Fetch reviews without filtering by researchId
//     getReviewsAPI()
//       .then((response) => {
//         if (response && Array.isArray(response.data)) {
//           setReviews(response.data);
//         } else {
//           setReviews([]); // Set to empty array if response is invalid
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         setReviews([]); // Fallback to empty array if API call fails
//       });
//   }, []);

//   const handleStarClick = (index) => {
//     setNewReview({ ...newReview, rating: index + 1 });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const reviewData = {
//       firstName: user.firstName,  // or wherever you get the first name
//       review: newReview.review,    // review input field
//       rating: newReview.rating,    // rating input field
//     };
  
//     try {
//       const response = await addReviewAPI(reviewData);
//       if (response.data) {
//         // Handle success response
//         console.log('Review added:', response.data);
//         setReviews([...reviews, response.data.review]); // Add new review to state
//         setShowModal(false); // Close the modal
//       }
//     } catch (error) {
//       console.error('Error in submit:', error);
//       alert('Error submitting review');
//     }
//   };

//   const handleDeleteReview = (reviewId) => {
//     deleteReviewAPI(reviewId)
//       .then(() => {
//         setReviews(reviews.filter((review) => review._id !== reviewId));
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleEditReview = (reviewId, updatedReview) => {
//     updateReviewAPI(reviewId, updatedReview)
//       .then((response) => {
//         setReviews(
//           reviews.map((review) =>
//             review._id === reviewId ? response.data.review : review
//           )
//         );
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="container">
//       <div
//         style={{
//           width: '100%',
//           background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)',
//           padding: '20px',
//           borderRadius: '10px',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
//           position: 'relative',
//         }}
//       >
//         <h2 style={{ color: 'white' }}>User Reviews</h2>

//         <Button
//           variant="light"
//           className="shadow"
//           style={{
//             position: 'absolute',
//             top: '20px',
//             right: '20px',
//             borderRadius: '10px',
//             padding: '10px 20px',
//             fontSize: '16px',
//             display: 'inline-block',
//             background: 'white',
//             color: 'black',
//           }}
//           onClick={() => setShowModal(true)}
//         >
//           Add Review
//         </Button>

//         {reviews.slice(0, 4).map((review) => {
//           // Check if review is a valid object
//           if (!review || !review.review) {
//             return null; // Skip rendering if review is invalid
//           }

//           return (
//             <div
//               key={review._id}
//               style={{
//                 background: 'white',
//                 padding: '15px',
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 marginBottom: '15px',
//               }}
//             >
//               <h4>{review.firstName}</h4>
//               <p>{review.review}</p>
//               <div style={{ color: 'gold' }}>
//                 {'★'.repeat(review.rating)}
//                 {'☆'.repeat(5 - review.rating)}
//               </div>

//               {/* Show edit and delete buttons only for logged-in user's reviews */}
//               {user && review.firstName === user.firstName && (
//                 <>
//                   <Button
//                     onClick={() => handleEditReview(review._id, newReview)}
//                     variant="warning"
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     onClick={() => handleDeleteReview(review._id)}
//                     variant="danger"
//                   >
//                     Delete
//                   </Button>
//                 </>
//               )}
//             </div>
//           );
//         })}

//         {/* Modal for adding a new review */}
//         <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>Add Your Review</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Form.Group className="mb-3">
//                 <Form.Label>Your Review</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   placeholder="Write your review"
//                   value={newReview.review}
//                   onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
//                 />
//               </Form.Group>

//               <Form.Group>
//                 <Form.Label>Rating</Form.Label>
//                 <div>
//                   {[...Array(5)].map((_, index) => (
//                     <span
//                       key={index}
//                       style={{
//                         fontSize: '24px',
//                         cursor: 'pointer',
//                         color: newReview.rating > index ? 'yellow' : 'gray',
//                         marginRight: '5px',
//                       }}
//                       onClick={() => handleStarClick(index)}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>
//               Close
//             </Button>
//             <Button onClick={handleSubmit}>Submit</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Home3;



// import React, { useState, useEffect } from 'react';
// import { addReviewAPI, getReviewsAPI } from '../services/allAPI';


// const ReviewPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ name: '', review: '', rating: 0 });

//   // Fetch reviews when the page loads
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const fetchedReviews = await getReviewsAPI();
//         setReviews(fetchedReviews);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   // Handle new review form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const addedReview = await addReviewAPI(newReview);
//       setReviews([addedReview, ...reviews]); // Add new review to the beginning
//       setNewReview({ name: '', review: '', rating: 0 }); // Reset form
//     } catch (error) {
//       console.error('Error submitting review:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Product Reviews</h1>

//       {/* Review Form */}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={newReview.name}
//             onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Review</label>
//           <textarea
//             value={newReview.review}
//             onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Rating</label>
//           <select
//             value={newReview.rating}
//             onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
//           >
//             <option value={0}>Select rating</option>
//             {[1, 2, 3, 4, 5].map((rating) => (
//               <option key={rating} value={rating}>{rating}</option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Submit Review</button>
//       </form>

//       {/* Display Reviews */}
//       <h2>All Reviews</h2>
//       {reviews.length === 0 ? (
//         <p>No reviews yet.</p>
//       ) : (
//         <ul>
//           {reviews.map((review) => (
//             <li key={review._id}>
//               <strong>{review.name}</strong>
//               <p>{review.review}</p>
//               <div>Rating: {review.rating} stars</div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ReviewPage;


// import React, { useState, useEffect } from 'react';
// import { getTopActiveUsersAPI } from '../services/allAPI'; // Ensure the correct path
// import roi from "../assets/roi.png"
// import defaultProfile from "../assets/popper.gif"; 
// const Home3 = () => {
//   const [activeUsers, setActiveUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const reqHeader = { /* Add headers if required */ };
//         const response = await getTopActiveUsersAPI(reqHeader);
//         setActiveUsers(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.response?.data?.message || 'Error fetching top active users');
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!Array.isArray(activeUsers) || activeUsers.length === 0) {
//     return <div>No active users found.</div>;
//   }

//   const getQuoteForRank = (rank) => {
//     const quotes = [
//       "🌟 You’re a shining star! Your dedication and hard work are unmatched. Keep reaching for greatness!",
//       "💪 Incredible effort! You’re just a step away from the top. Keep pushing forward!",
//       "🚀 Fantastic achievement! Keep aiming high and breaking barriers!",
//     ];
//     return quotes[rank - 1];
//   };

//   return (
//    <div className='container'>
//       <div
//   style={{
//     background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)',
//     marginTop: '30px',
//     maxWidth: '100vw',
//     textAlign: 'center',
//     minHeight: '500px',
//     padding: '20px',
//   }}
//   className="rounded shadow w-100"
// >
//   <h1
//     style={{
//       textAlign: 'center',
//       fontSize: '40px',
//       fontWeight: '900',
//       marginBottom: '20px',
//     }}
//   >
//     <img width={200} src={roi} alt="" />
//     Top Performing Users
//     <img width={200} src={roi} alt="" />
//   </h1>
//   <div
//     style={{
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//       gap: '20px',
//     }}
//   >
//     {activeUsers.map((user, index) => (
//       <div
//         key={user.id || index}
//         style={{
//           background: 'white',
//           width: '300px',
//           padding: '20px',
//           borderRadius: '10px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center',
//         }}
//       >
//        <img
//                 src={ defaultProfile}
//                 alt={`${user.firstName} ${user.lastName}`}
//                 width={80}
//                 height={80}
//                 style={{
//                   borderRadius: '50%',
//                   marginBottom: '10px',
//                   objectFit: 'cover',
//                 }}
//           onError={(e) => (e.target.src = {defaultProfile})}
//         />
//         <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '5px' }}>
//           {`${user.firstName} ${user.lastName}`}
//         </div>
//         <div style={{ color: '#555' }}>{getQuoteForRank(index + 1)}</div>
//       </div>
//     ))}
//   </div>
// </div>

//    </div>
//   );
// };

// export default Home3;
import React, { useState, useEffect } from 'react';
import { getTopActiveUsersAPI } from '../services/allAPI'; // Ensure the correct path
import roi from "../assets/roi.png";
import defaultProfile from "../assets/popper.gif"; // Default image
import imoji1 from "../assets/emoji1.gif";
import imoji2 from "../assets/emji2.gif";
import imoji3 from "../assets/emoji2.gif";

const Home3 = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const reqHeader = {}; // Add headers if required
        const response = await getTopActiveUsersAPI(reqHeader);
        setActiveUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching top active users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!Array.isArray(activeUsers) || activeUsers.length === 0) {
    return <div>No active users found.</div>;
  }

  const getQuoteForRank = (rank) => {
    const quotes = [
      "🌟 You’re a shining star! Your dedication and hard work are unmatched. Keep reaching for greatness!",
      "💪 Incredible effort! You’re just a step away from the top. Keep pushing forward!",
      "🚀 Fantastic achievement! Keep aiming high and breaking barriers!",
    ];
    return quotes[rank - 1];
  };

  const getImageForRank = (rank) => {
    if (rank === 1) return imoji1;
    if (rank === 2) return imoji3;
    return imoji2;
  };

  return (
    <div className="container">
      <div
        style={{
          background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)',
          marginTop: '30px',
          maxWidth: '100vw',
          textAlign: 'center',
          minHeight: '500px',
          padding: '20px',
        }}
        className="rounded shadow w-100"
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: '900',
            marginBottom: '20px',
          }}
        >
          <img width={200} src={roi} alt="" />
          Top Performing Users
          <img width={200} src={roi} alt="" />
        </h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {activeUsers.map((user, index) => (
            <div
              key={user.id || index}
              className="user-card"
            >
              {/* Set a different image for each card based on rank */}
              <div
                className="user-image"
                style={{
                  backgroundImage: `url(${getImageForRank(index + 1)})`,
                }}
              />
              <div className="user-details">
                <img
                  src={user.profilePic || defaultProfile}
                  alt={`${user.firstName} ${user.lastName}`}
                  width={150}
                  height={150}
                  style={{ borderRadius: '50%', marginBottom: '10px' }}
                />
                <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '5px' }}>
                  {`${user.firstName} ${user.lastName}`}
                </div>
                <div style={{ color: '#555' }}>{getQuoteForRank(index + 1)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .user-card {
          background: white;
          width: 300px;
          height: 300px; /* Keep the height fixed */
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
        }

        .user-card:hover {
          transform: scale(1.05); /* Slight zoom on hover */
          background-color: white; /* Maintain white background on hover */
        }

        .user-image {
          background-size: cover;
          background-position: center;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: opacity 0.3s ease;
        }

        .user-details {
          opacity: 0; /* Initially hidden */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #555;
          text-align: center;
          transition: opacity 0.3s ease;
          width: 100%;
          padding: 10px;
        }

        .user-card:hover .user-details {
          opacity: 1; /* Show details on hover */
        }

        .user-card:hover .user-image {
          opacity: 0; /* Hide the image on hover */
        }
      `}</style>
    </div>
  );
};

export default Home3;
