import { fetchData } from "@/lib/Fetch";
import { ApiResponse } from "@/types";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetCrypto = () => {
  return useSuspenseQuery<ApiResponse, Error>({
    queryKey: ["cryptoData"],
    queryFn: fetchData,
  });
};
