import { ApiResponse, Client } from "@/types";
import instance from "../lib/axios";

class ProfileApi {
  async fetchProfile(): Promise<ApiResponse<Client, "client">> {
    const response = await instance.get<ApiResponse<Client, "client">>("/profile");
    return response.data;
  }
}

export const profileApi = new ProfileApi();
