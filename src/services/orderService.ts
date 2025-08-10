import { orderApi } from "@/api/orderApi";
import { Order, OrderPayload, UserOrders } from "@/types";

class OrderService {
  private api: typeof orderApi;
  constructor() {
    this.api = orderApi;
  }

  async getUserOrders(): Promise<UserOrders> {
    const response = await this.api.fetchOrders_get();
    if (!response.success || !response.payload?.userOrders) {
      throw new Error(response.message || "Failed to get user orders");
    }
    return response.payload.userOrders;
  }

  async placeOrder(data: OrderPayload): Promise<Order> {
    const response = await this.api.createOrder_post(data);
    if (!response.success || !response.payload?.newOrder) {
      throw new Error(response.message || "Failed to return the placed order");
    }
    return response.payload.newOrder;
  }
}

export const orderService = new OrderService();
