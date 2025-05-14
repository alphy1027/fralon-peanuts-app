import { useAuth } from "@/context/AuthContext";
import axiosInstance from "@/api/axios";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

interface ErrorResponse {
  statusCode: number;
  message: string;
  success: boolean;
}

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const useAxiosInstance = () => {
  const { user, logout } = useAuth();
  const refresh = useRefreshToken();
  const accessToken = user.accessToken;

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        if (!config.headers["Authorization"] && accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => {
        return response;
      },
      async (error: AxiosError<ErrorResponse>) => {
        if (error.config) {
          const originalRequest: CustomAxiosRequestConfig = error.config;
          //Check if the error is due to expired access token (401)
          if (error?.response?.status === 401 && error?.response?.data?.message === "Unauthorized, token expired" && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
              // request a new access token using the refresh tokens
              const newAccessToken = await refresh();
              // Update the headers and retry the original request
              originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
              return axiosInstance(originalRequest);
            } catch (refreshError) {
              //Logout user and redirect to home page
              console.log("Error during token refresh ::", refreshError);
              logout();
              window.location.assign("/auth/login");
              return Promise.reject(refreshError);
            }
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refresh, logout]);

  return axiosInstance;
};

export default useAxiosInstance;
