import { ApiResponse, Product } from "@/types";
import instance from "@/lib/axios";

class ProductApi {
  async fetchProducts(): Promise<ApiResponse<Product[], "products">> {
    const response = await instance.get<ApiResponse<Product[], "products">>("/products");
    return response.data;
  }

  async fetchSingleProduct(productId: string): Promise<ApiResponse<Product, "product">> {
    const response = await instance.get<ApiResponse<Product, "product">>(`/products/${productId}`);
    return response.data;
  }
}

export const productApi = new ProductApi();
