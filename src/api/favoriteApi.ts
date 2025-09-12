import { ApiResponse, FavoriteItems } from "@/types";
import instance from "@/lib/axios";

class FavoriteApi {
  async getFavItems_get(): Promise<ApiResponse<FavoriteItems, "favoriteProducts">> {
    const response = await instance.get<ApiResponse<FavoriteItems, "favoriteProducts">>("/favorites");
    return response.data;
  }

  async addFavItem_post(productId: string): Promise<ApiResponse<FavoriteItems, "favoriteProducts">> {
    const response = await instance.post<ApiResponse<FavoriteItems, "favoriteProducts">>("/favorites", { productId });
    return response.data;
  }

  async removeFavItem_delete(productId: string): Promise<ApiResponse<FavoriteItems, "favoriteProducts">> {
    const response = await instance.delete<ApiResponse<FavoriteItems, "favoriteProducts">>("/favorites", { data: { productId } });
    return response.data;
  }
}

export const favoriteApi = new FavoriteApi();
