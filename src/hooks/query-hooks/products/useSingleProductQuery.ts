import { productService } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

export const useSingleProductQuery = (productId: string) => {
  return useQuery({
    queryKey: ["products", productId],
    queryFn: () => productService.getSingleProduct(productId),
    staleTime: 5 * 60 * 1000,
    enabled: !!productId,
  });
};
