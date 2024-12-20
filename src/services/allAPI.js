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

// Fetch top 3 active users
// Get Top Active Users API
export const getTopActiveUsersAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_BASE_URL}/top-active-users`, {}, reqHeader);
};

