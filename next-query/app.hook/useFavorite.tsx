import { useQueryClient, useQuery } from "react-query";

const queryKey = 'intoFavorite';

const useFavorite = () => {
  const queryClient: any = useQueryClient();

  const featchCartItem = () => {
    return queryClient.getQueryData(queryKey)
  }

  const { isLoading, error, data } = useQuery(queryKey, featchCartItem) 

  if (isLoading) return null;
  if (error) return null;

  return data;
};

export default useFavorite;
