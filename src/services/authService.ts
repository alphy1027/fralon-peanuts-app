import { authApi } from "@/api/authApi";
import { LoginResponse } from "@/api/types/types";
import { ActiveUser, ApiResponse, NewUser, ResetPasswordPayload, SignupPayload } from "@/types";
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

  async createUser(signupPayload: SignupPayload): Promise<NewUser> {
    const response = await this.api.signup(signupPayload);
    if (!response.success || !response.payload?.newUser) {
      throw new Error(response.message || "Failed to Sign up new user");
    }
    return response.payload.newUser;
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

  async resendVerificationEmail(email: string): Promise<Pick<ApiResponse, "success" | "message">> {
    const response = await this.api.resendVerificationEmail_post(email);
    if (!response.success) {
      throw new Error(response.message || "Failed to resend for a new verification email");
    }
    return { success: response.success, message: response.message };
  }

  async verifyEmail(verificationToken: string): Promise<Pick<ApiResponse, "success" | "message" | "statusCode">> {
    const response = await this.api.verifyEmail_get(verificationToken);
    if (!response.success) {
      throw new Error(response.message || "Failed to complete your Email verification");
    }
    return { success: response.success, message: response.message, statusCode: response.statusCode };
  }

  async forgotPassword(email: string): Promise<Pick<ApiResponse, "success" | "message">> {
    const response = await this.api.forgotPassword_post(email);
    if (!response.success) {
      throw new Error(response.message || "Failed to send password reset email");
    }
    return { success: response.success, message: response.message };
  }

  async resetPassword(data: ResetPasswordPayload): Promise<Pick<ApiResponse, "message" | "success">> {
    const response = await this.api.resetPassword_post(data);
    if (!response.success) {
      throw new Error(response.message || "Failed to reset your password");
    }
    return { success: response.success, message: response.message };
  }
}

export const authService = new AuthService();
