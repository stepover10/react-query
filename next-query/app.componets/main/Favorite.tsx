import { useQueryClient } from "react-query";

const queryKey = 'intoFavorite';

const Favorite = () => {
  const queryClient: any = useQueryClient();

  const patchIntoFavorite = () => {
    queryClient.setQueryData(queryKey, (prev) => {
      return {
        ...prev,
        name: '😂 wow!'
      }
    });
  }

  return (
    <div>
     🤡 Favorite!

     <button onClick={patchIntoFavorite}>
       Update Favorite
     </button>
    </div>
  );
};

export default Favorite;
