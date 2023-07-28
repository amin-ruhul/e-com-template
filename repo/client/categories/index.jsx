import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const fetchCategories = () => {
  return apiClient({
    url: `/v4/categories`,
    method: "GET",
  });
};

export const useFetchCategories = (useQueryOptions) => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    ...useQueryOptions,
    select: (res) => {
      return res.data;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
