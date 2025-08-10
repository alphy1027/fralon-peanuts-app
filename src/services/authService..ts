import { authApi } from "@/api/authApi";
import { LoginResponse } from "@/api/types/types";
import { ActiveUser, ApiResponse } from "@/types";
import { tokenManager } from "@/utils/tokenManager";

export class AuthService {
  private api: typeof authApi;
  constructor() {
    this.api = authApi;
  }

  async loginUser(email: string, password: string): Promise<ActiveUser> {
    const response = await this.api.login(email, password);
    if (!response.success || !response.payload?.token) {
      /* this.logoutUser(); */
      throw new Error(response.message || "Login failed");
    }
    tokenManager.setToken(response.payload.token.accessToken);
    return {
      userId: response.payload.token.userId,
      username: response.payload.token.username,
      roles: response.payload.token.roles,
    };
  }

  async logoutUser(): Promise<Pick<ApiResponse, "success" | "message">> {
    const response = await this.api.logout();
    if (!response.success) {
      throw new Error(response.message || "Failed to Logout");
    }
    tokenManager.setToken(null);
    return { success: response.success, message: response.message };
  }

  async refreshUserToken(): Promise<{ newToken: LoginResponse }> {
    const response = await this.api.refresh();
    if (!response.success || !response.payload?.newToken) {
      throw new Error(response.message || "Failed to refresh the user");
    }
    tokenManager.setToken(response.payload.newToken.accessToken);
    return response.payload;
  }
}

export const authService = new AuthService();
