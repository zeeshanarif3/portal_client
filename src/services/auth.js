import axios from "axios";
// import {  LOCAL_BASE_URL } from "../environment/index"; // Adjust the path as needed

// const BASE_URL = process.env.REACT_APP_ENV === "staging" ? STAG_BASE_URL : LOCAL_BASE_URL;

export const LOCAL_BASE_URL = "http://localhost:4000/";



// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${LOCAL_BASE_URL}user/register`, userData);
//     return response.data;
//   } catch (error) {
//     console.error("Error during registration:", error);
//     throw error.response?.data || error.message;
//   }
// };

export const loginUser = async (credentials) => {
  try {

    const response = await axios.post(`${LOCAL_BASE_URL}auth/login`, credentials);
    console.log(response,"response");
    
    const { payload ,token} = response.data.data;
    // console.log(payload,"payload");

    
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(payload));
    return response.data;

  } catch (error) {
    console.error("Login failed:", error);
    throw error.response?.data || error.message; 
  }
};