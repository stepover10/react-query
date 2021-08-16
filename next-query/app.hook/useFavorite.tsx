import { useQueryClient, useQuery } from "react-query";

const queryKey = 'intoFavorite';

const useFavorite = () => {
  const queryClient: any = useQueryClient();

  const featchCartItem = () => {
    return queryClient.getQueryData(queryKey)
  }

  const { isLoading, error, data } = useQuery(queryKey, featchCartItem) 


  if (isLoading) return "Loading...";
  if (error) return "An error has occurred";


  return data;
};

export default useFavorite;
