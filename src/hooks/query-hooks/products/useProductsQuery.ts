import { productService } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getProducts(),
    staleTime: 5 * 60 * 1000,
  });
};
