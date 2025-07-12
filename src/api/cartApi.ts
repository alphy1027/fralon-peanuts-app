import instance from "@/lib/axios";
import { ApiResponse, Cart } from "@/types";

class CartApi {
  async fetchCart_get(): Promise<ApiResponse<Cart, "cart">> {
    const response = await instance.get<ApiResponse<Cart, "cart">>("/cart");
    return response.data;
  }

  async addToCart_post(productId: string): Promise<ApiResponse<Cart, "updatedCart">> {
    const response = await instance.post<ApiResponse<Cart, "updatedCart">>("/cart", { productId });
    return response.data;
  }

  async removeFromCart_delete(productId: string): Promise<ApiResponse<Cart, "updatedCart">> {
    const response = await instance.delete<ApiResponse<Cart, "updatedCart">>("/cart", { data: { productId } });
    return response.data;
  }

  async updateItemQuantity_patch(productId: string, quantity: number): Promise<ApiResponse<Cart, "updatedCart">> {
    const response = await instance.patch<ApiResponse<Cart, "updatedCart">>("/cart", { productId, quantity });
    return response.data;
  }
}

export const cartApi = new CartApi();
