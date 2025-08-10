import instance from "@/lib/axios";
import { ApiResponse, Order, OrderPayload, UserOrders } from "@/types";

class OrderApi {
  async fetchOrders_get(): Promise<ApiResponse<UserOrders, "userOrders">> {
    const response = await instance.get<ApiResponse<UserOrders, "userOrders">>("/profile/orders");
    return response.data;
  }

  async createOrder_post(data: OrderPayload): Promise<ApiResponse<Order, "newOrder">> {
    const response = await instance.post<ApiResponse<Order, "newOrder">>("/orders", { ...data });
    return response.data;
  }
}

export const orderApi = new OrderApi();
