import { useState, useEffect, useCallback } from "react";
import { AxiosError } from "axios";
import useAxiosInstance from "./useAxiosInstance";

interface StateTypes<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

interface fetchOptions {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: unknown;
}

const useFetch = <T,>({ url, method = "GET", body = null }: fetchOptions) => {
  const [state, setState] = useState<StateTypes<T>>({ data: null, loading: false, error: null });
  const axiosInstance = useAxiosInstance();

  const fetchData = useCallback(async () => {
    setState((prevState) => ({ ...prevState, loading: true, error: null }));

    try {
      const response = await axiosInstance({
        method,
        url,
        data: body,
      });
      console.log("Fetched data", response.data);

      setState({ data: response.data.payload !== undefined ? response.data.payload : response.data, loading: false, error: null });
      console.log("State after fetch:", state);
    } catch (err) {
      const axiosError = err as AxiosError;
      setState((prevState) => ({ ...prevState, loading: false, error: axiosError }));
      throw axiosError;
    }
  }, [method, url, axiosInstance, body]);

  useEffect(() => {
    if (method === "GET") {
      fetchData();
    }
  }, [fetchData]);

  const refetch = () => fetchData();

  return { ...state, refetch };
};

export default useFetch;
