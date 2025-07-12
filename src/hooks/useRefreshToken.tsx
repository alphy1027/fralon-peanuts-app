import { useAuthContext } from "@/context/AuthContext";
import { axiosPrivate } from "@/lib/axios";
import { AxiosResponse } from "axios";
import { useCallback } from "react";

interface ResponseType {
  payload: {
    accessToken: string;
    username: string;
    userId: string;
    roles: string[];
  };
}

const useRefreshToken = () => {
  const { login, user } = useAuthContext();
  const refresh = useCallback(async () => {
    try {
      const response: AxiosResponse<ResponseType> = await axiosPrivate.post("/auth/refresh", {});
      const newAccessToken = response.data.payload.accessToken;

      if (!user.isAuthenticated || !user.username || !user.userId) {
        login({
          ...user,
          userId: response.data.payload.userId,
          username: response.data.payload.username,
          accessToken: response.data.payload.accessToken,
          roles: user.roles,
        });
      } else {
        login({
          ...user,
          userId: user.userId,
          username: user.username,
          accessToken: newAccessToken,
          roles: user.roles,
        });
      }
      console.log("Access token successfully refreshed");
      return newAccessToken;
    } catch (err: any) {
      console.log(err.response);
      throw new Error(err);
    }
  }, [axiosPrivate]);

  return refresh;
};

export default useRefreshToken;
