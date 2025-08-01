import { ApiResponse } from "@/types";
import instance from "@/lib/axios";
import { LoginResponse } from "./types/types";

class AuthApi {
  async login(email: string, password: string): Promise<ApiResponse<LoginResponse, "token">> {
    const response = await instance.post<ApiResponse<LoginResponse, "token">>("/auth/login", { email, password });
    return response.data;
  }

  async refresh(): Promise<ApiResponse<LoginResponse, "newToken">> {
    const response = await instance.post<ApiResponse<LoginResponse, "newToken">>("auth/refresh", {});
    return response.data;
  }

  async logout(): Promise<ApiResponse> {
    const response = await instance.post<ApiResponse>("auth/logout", {});
    return response.data;
  }
}

export const authApi = new AuthApi();
