import mem from "mem";
import axios from "axios";

// axios instance creation
const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// refreshTokenFn function definition
const refreshTokenFn = async () => {
  const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));

  if (!refreshToken) {
    throw new Error("No refresh token found");
  }

  try {
    const response = await axiosPublic.post(
      "/refreshToken",
      {}, // empty body
      {
        headers: {
          "Authorization": `Bearer ${refreshToken}`, 
          "Content-Type": "application/json",
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw error; // re-throw the error after logging it
  }
};

// Memoization settings
const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
