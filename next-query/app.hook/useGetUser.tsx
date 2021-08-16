import { useQueryClient, useQuery } from "react-query";

const queryKey = 'intoAPP';

const useGetUser = () => {
  const queryClient: any = useQueryClient();
  return queryClient.getQueryData(queryKey);
};

export default useGetUser;
