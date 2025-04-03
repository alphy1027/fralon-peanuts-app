import { useAuth } from "@/context/AuthContext";
import axiosInstance from "@/services/axios";
import { AxiosResponse } from "axios";

const useRefreshToken = () => {
  const { login, user } = useAuth();
  const refresh = async () => {
    try {
      const response: AxiosResponse<{ payload: { accessToken: string } }> = await axiosInstance.post("/auth/refresh", {});
      const newAccessToken = response.data.payload.accessToken;

      if (!user.isAuthenticated || !user.username || !user.userId) {
        throw new Error("No Valid User to assign token");
      }
      login({
        ...user,
        userId: user.userId,
        username: user.username,
        accessToken: newAccessToken,
        roles: user.roles,
      });

      return newAccessToken;
    } catch (err: any) {
      console.log(err.response.data.message);
      throw new Error("Failed to refresh for new tokens");
    }
  };

  return refresh;
};

export default useRefreshToken;
