import { useEffect } from "react";
import { useMutation, useQueryClient, QueryCache } from "react-query";

const queryKey = 'action/cart';

const CartItem = () => {
  const queryClient: any = useQueryClient();
  const getCartDataset = queryClient.getQueryData(queryKey);

  const update = (data:any) => {
    // redux store 업데이트와 비슷
    queryClient.setQueryData(queryKey, () => {      
      return {
        count: Date.now()
      }
    })   

    return data.count;
  };

  return !getCartDataset ? null : (
    <div>
     😴 Cart!
     <button onClick={update}>
       Mutaion Cart!
     </button>
    </div>
  );
};

export default CartItem;
