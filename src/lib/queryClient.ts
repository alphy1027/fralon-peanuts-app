import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000,
    },
    mutations: {
      onError: (error) => {
        console.log("Query Mutation Error :: ", error);
      },
    },
  },
});

export default queryClient;
