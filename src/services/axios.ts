import axios, { AxiosError, AxiosResponse } from "axios";


interface User {
    payload: {
        accessToken: string;
    };
}

interface RefreshResponse {
    accessToken: string;
}

interface ApiResponse<T> {
    data: T;
    message?: string;
    status: string;
}


interface ErrorResponse {
    status?: string;
    message?: string;
    data?: any;
}






export const axiosPrivate = axios.create({
    baseURL: 'http://localhost:3500',
    withCredentials: true
})

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3500',
    withCredentials: true
})

axiosInstance.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json';
    const user: User | null = JSON.parse(localStorage.getItem('user') || 'null');

    if (user && user.payload.accessToken) {
        config.headers.Authorization = `Bearer ${user.payload.accessToken}`;
    }

    return config;

}, (error: AxiosError<ErrorResponse>) => Promise.reject(error))

axiosInstance.interceptors.response.use((response: AxiosResponse<ApiResponse<any>>) => {

    return response;

}, async (error: AxiosError<ErrorResponse>) => {

    console.log('response interceptor error:', error.response.data.message)

    const originalRequest = error.config as any;
    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
            //requesting a new access token using the refresh token
            const refreshResponse: AxiosResponse<ApiResponse<RefreshResponse>> = await axiosPrivate.post('/auth/refresh', {});

            const newAccessToken = refreshResponse.data;
            localStorage.setItem('user', JSON.stringify({ payload: { accessToken: newAccessToken } }))

            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

            return axiosInstance(originalRequest);

        } catch (err) {
            localStorage.removeItem('user')
            window.location.href = '/auth/login'
        }
    }

    return Promise.reject(error)
})

export default axiosInstance