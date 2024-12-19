import React, { useState, useEffect } from 'react';
import { getReviewsAPI } from './allAPI'; // Import the get reviews API function

const ReviewsPage = ({ researchId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsAPI(researchId)
      .then((response) => {
        if (response && Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          setReviews([]); // Fallback to empty array if the response is invalid
        }
      })
      .catch((err) => {
        console.error(err);
        setReviews([]); // Fallback to empty array if API call fails
      });
  }, [researchId]);

  return (
    <div className="container">
      <h2>User Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available.</p> // Provide message when there are no reviews
      ) : (
        reviews.map((review) => (
          <div
            key={review._id}
            style={{
              background: 'white',
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '15px',
            }}
          >
            <h4>{review.firstName}</h4> {/* Update to match data structure */}
            <p>{review.review}</p>
            <div style={{ color: 'gold' }}>
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewsPage;
