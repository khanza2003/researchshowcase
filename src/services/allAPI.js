import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";
import axios from "axios";

// Register API
export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_BASE_URL}/register`, reqBody);
};

// Login API
export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_BASE_URL}/login`, reqBody);
};

// Add Research API
export const addResearchAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${SERVER_BASE_URL}/add-research`, reqBody, reqHeader);
};

// Get User Research API
export const userResearchAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_BASE_URL}/user-research`, {}, reqHeader);
};

// Get All Research API
export const allResearchAPI = async (reqHeader, searchKey) => {
  return await commonAPI("GET", `${SERVER_BASE_URL}/all-research?search=${searchKey}`, {}, reqHeader);
};

// Edit Research API
export const updateResearchAPI = async (id, reqBody, reqHeader) => {
  return await commonAPI("PUT", `${SERVER_BASE_URL}/research/${id}/edit`, reqBody, reqHeader);
};

// Delete Research API
export const deleteResearchAPI = async (id, reqHeader) => {
  return await commonAPI("DELETE", `${SERVER_BASE_URL}/research/${id}/remove`, {}, reqHeader);
};

// Update User API
export const updateUserAPI = async (reqBody, reqHeader) => {
  return await commonAPI("PUT", `${SERVER_BASE_URL}/user/edit`, reqBody, reqHeader);
};

// Add review API
// export const addReviewAPI = async (reviewData) => {
//   try {
//     return await commonAPI("POST", `${SERVER_BASE_URL}/review`, reviewData);
//   } catch (error) {
//     console.error('Error adding review:', error);
//     throw error; // Re-throw the error to be handled in the component
//   }
// };
// export const addReviewAPI = async (reqBody, reqHeader) => {
//   return await commonAPI("POST", `${SERVER_BASE_URL}/review`, reqBody, reqHeader);
// };


// Update review API
// export const updateReviewAPI = async (reviewId, updatedReviewData) => {
//   try {
//     return await commonAPI("PUT", `${SERVER_BASE_URL}/review/${reviewId}`, updatedReviewData);
//   } catch (error) {
//     console.error('Error updating review:', error);
//     throw error; // Re-throw the error to be handled in the component
//   }
// };
// export const updateReviewAPI = async (reviewId, reqBody, reqHeader) => {
//   return await commonAPI("PUT", `${SERVER_BASE_URL}/review/${reviewId}`, reqBody, reqHeader);
// };

// Delete review API
// export const deleteReviewAPI = async (reviewId) => {
//   try {
//     return await commonAPI("DELETE", `${SERVER_BASE_URL}/review/${reviewId}`);
//   } catch (error) {
//     console.error('Error deleting review:', error);
//     throw error; // Re-throw the error to be handled in the component
//   }
// };
// export const deleteReviewAPI = async (reviewId, reqHeader) => {
//   return await commonAPI("DELETE", `${SERVER_BASE_URL}/review/${reviewId}`, {}, reqHeader);
// };

// Get Reviews by Research ID
//export const getReviewsAPI = async (researchId) => {
 // try {
 //   return await commonAPI("GET",`${SERVER_BASE_URL}/review/${researchId}`);
//  } catch (error) {
 //   console.error('Error fetching reviews:', error);
 //   throw error; // Re-throw the error to be handled in the component
//  }
//};



// export const getReviewsAPI = async (researchId, reqHeader) => {
//   return await commonAPI("GET", `${SERVER_BASE_URL}/review/${researchId}`, {}, reqHeader);
// };

// Add a review
export const addReviewAPI = async (reviewData) => {
  try {
    const response = await axios.post(SERVER_BASE_URL, reviewData);
    return response.data;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};

// Get all reviews
export const getReviewsAPI = async () => {
  try {
    const response = await axios.get(SERVER_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

// Fetch top 3 active users
// Get Top Active Users API
export const getTopActiveUsersAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_BASE_URL}/top-active-users`, {}, reqHeader);
};

