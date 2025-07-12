import { cartApi } from "@/api/cartApi";
import { Cart } from "@/types";

class CartService {
  private api: typeof cartApi;
  constructor() {
    this.api = cartApi;
  }

  async getCart(): Promise<Cart> {
    const response = await this.api.fetchCart_get();
    if (!response.success || !response.payload?.cart) {
      throw new Error(response.message || "Failed to get cart");
    }
    return response.payload?.cart;
  }

  async addToCart(productId: string): Promise<Cart> {
    const response = await this.api.addToCart_post(productId);
    if (!response.success || !response.payload?.updatedCart) {
      throw new Error(response.message || "Failed to add item to cart");
    }
    return response.payload.updatedCart;
  }

  async removeFromCart(productId: string): Promise<Cart> {
    const response = await this.api.removeFromCart_delete(productId);
    if (!response.success || !response.payload?.updatedCart) {
      throw new Error(response.message || "Failed to remove item from cart");
    }
    return response.payload.updatedCart;
  }

  async updateItemQuantity(productId: string, quantity: number): Promise<Cart> {
    const response = await this.api.updateItemQuantity_patch(productId, quantity);
    if (!response.success || !response.payload?.updatedCart) {
      throw new Error(response.message || "Failed to update item quantity");
    }
    return response.payload.updatedCart;
  }
}

export const cartService = new CartService();
