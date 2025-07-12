import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { tokenManager } from "@/utils/tokenManager";
import { authService } from "@/services/authService.";

interface ErrorResponse {
  statusCode: number;
  message: string;
  success: boolean;
}

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const API_BASE_URL: string = import.meta.env.VITE_APP_BACKEND_URL;

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
    //Check if the error is due to expired access token (401)
    if (error?.response?.status === 401 && error?.response?.data?.message === "Unauthorized, token expired" && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // request a new access token using the refresh tokens
        const accessTokenResponse = await authService.refreshUserToken();
        const newAccessToken = accessTokenResponse.payload?.newToken.accessToken ?? null;
        tokenManager.setToken(newAccessToken);
        // Update the headers and retry the original request
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        //Logout user and redirect to home page
        console.log("Error during token refresh ::", refreshError);
        authService.logoutUser();
        tokenManager.setToken(null);
        window.location.assign("/auth/login");
        return Promise.reject(refreshError);
      }
    }
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(requestInterceptor, (error) => Promise.reject(error));
axiosInstance.interceptors.response.use(responseInterceptor, responseInterceptorError);

export default axiosInstance;
