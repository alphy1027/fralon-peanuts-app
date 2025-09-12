import { favoriteApi } from "@/api/favoriteApi";
import { FavoriteItems } from "@/types";

class FavoriteService {
  private api: typeof favoriteApi;
  constructor() {
    this.api = favoriteApi;
  }

  async getFavorites(): Promise<FavoriteItems> {
    const response = await this.api.getFavItems_get();
    if (!response.success || !response.payload?.favoriteProducts) {
      throw new Error(response.message || "Failed to get favorites");
    }
    return response.payload.favoriteProducts;
  }

  async addToFavorite(productId: string): Promise<FavoriteItems> {
    const response = await this.api.addFavItem_post(productId);
    if (!response.success || !response.payload?.favoriteProducts) {
      throw new Error(response.message || "Failed to add item to favorites");
    }
    return response.payload.favoriteProducts;
  }

  async removeFromFavorite(productId: string): Promise<FavoriteItems> {
    const response = await this.api.removeFavItem_delete(productId);
    if (!response.success || !response.payload?.favoriteProducts) {
      throw new Error(response.message || "Failed to remove item from favorites");
    }
    return response.payload.favoriteProducts;
  }
}

export const favoriteService = new FavoriteService();
