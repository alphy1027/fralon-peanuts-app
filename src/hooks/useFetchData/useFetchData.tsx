import { useState, useEffect } from 'react';
import axiosInstance from '@/services/axios';

interface FetchDataResponse {
    payload: any;
}

interface FetchDataError {
    message: string;
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';


const useFetchData = (
    url: string,
    method: Method = 'GET',
    body: any = null
) => {
    const [data, setData] = useState<FetchDataResponse | null>(null);
    const [error, setError] = useState<FetchDataError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async (requestBody: any = null) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axiosInstance({
                method,
                url,
                data: requestBody || body
            });
            setData(response.data); // Adjust based on the exact structure of the response
            console.log(response.data);
        } catch (err: any) {
            setError({ message: err.response?.data?.message || 'An error occurred' });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (method === 'GET') {
            fetchData();
        }
    }, [url, method]); // Only run for GET requests on initial render or URL change

    return { data, error, isLoading, fetchData };
};

export default useFetchData;
