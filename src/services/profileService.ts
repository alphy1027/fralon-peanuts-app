import { profileApi } from "@/api/profileApi";
import { Client } from "@/types";

export class ProfileService {
  private api: typeof profileApi;
  constructor() {
    this.api = profileApi;
  }

  async getProfile(): Promise<Client> {
    const response = await this.api.fetchProfile();
    if (!response.success || !response.payload?.client) {
      throw new Error(response.message || "Failed to get user profile");
    }
    return response.payload.client;
  }
}

export const profileService = new ProfileService();
