import { orderService } from "@/services/orderService";
import { OrderPayload } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useOrderMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: OrderPayload) => orderService.placeOrder(data),
    onSuccess: (newOrder) => {
      console.log("Order  Success :: ", newOrder);
      navigate(`/order-success/${newOrder._id}`, { state: { order: newOrder } });
    },
    onError: (error) => {
      console.log("Order mutation error::", error);
      navigate("/order-failure");
    },
  });
};
