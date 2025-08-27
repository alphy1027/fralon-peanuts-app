import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { tokenManager } from "@/utils/tokenManager";
import { authService } from "@/services/authService";
//import toast from "react-hot-toast";

export interface ErrorResponse {
  statusCode: number;
  message: string;
  success: boolean;
}

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const API_BASE_URL: string = import.meta.env.VITE_BACKEND_URL || 3000;

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const accessToken = tokenManager.getToken();
  if (!config.headers["Authorization"] && accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
};

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const responseInterceptorError = async (error: AxiosError<ErrorResponse>) => {
  if (error.config) {
    const originalRequest: CustomAxiosRequestConfig = error.config;
    //toast.error(`${error.response?.data.message}`);
    //Check if the error is due to expired access token (401)
    if (error?.response?.status === 401 && error?.response?.data?.message === "Unauthorized, token expired" && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // request a new access token using the refresh tokens
        const accessTokenResponse = await authService.refreshUserToken();
        const newAccessToken = accessTokenResponse.newToken.accessToken;
        if (!newAccessToken) {
          throw new Error("New token not found");
        }
        tokenManager.setToken(newAccessToken);
        // Update the headers and retry the original request
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        //Logout user and redirect to home page
        await authService.logoutUser();
        window.location.href = "/";
        console.log("Error during token refresh ::", refreshError);
        return Promise.reject(refreshError);
      }
    }
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(requestInterceptor, (error) => Promise.reject(error));
axiosInstance.interceptors.response.use(responseInterceptor, responseInterceptorError);

export default axiosInstance;
