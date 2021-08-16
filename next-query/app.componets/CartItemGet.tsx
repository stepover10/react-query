import { useQueryClient } from "react-query";

const queryKey = 'action/cart';

const CartItemGet = () => {
  const queryClient: any = useQueryClient();
  
  const getCartDataset = () => {
    const getCartDataset = queryClient.getQueryData(queryKey);
    console.log('😛 current status', getCartDataset);
  }

  const patchIntoAPP = () => {
    queryClient.setQueryData(queryKey, (prev) => {
      const add = prev.count + 1;
      return {
        ...prev,
        count: add
      }
    });
  }

  return (
    <div>
     🙄 Cart!
     <button onClick={getCartDataset}>
       Update Cart
     </button>
     <button onClick={patchIntoAPP}>
       Add Cart
     </button>
    </div>
  );
};

export default CartItemGet;
