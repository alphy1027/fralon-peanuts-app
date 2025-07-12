import { productApi } from "@/api/productApi";
import { ApiResponse, Product } from "@/types";

export class ProductService {
  private api: typeof productApi;
  constructor() {
    this.api = productApi;
  }
  getProducts(): Promise<ApiResponse<Product[], "products">> {
    return this.api.fetchProducts();
  }
  getSingleProduct(productId: string): Promise<ApiResponse<Product, "product">> {
    return this.api.fetchSingleProduct(productId);
  }
}

export const productService = new ProductService();
