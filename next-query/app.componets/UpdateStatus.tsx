import { useQueryClient } from "react-query";
import useFavorite from "../app.hook/useFavorite";

const UpdateStatus = () => {
  const favorite = useFavorite();
  console.log(favorite);
  return (
    <div>
     😾 favorite update?!
      {favorite.name}
    </div>
  );
};

export default UpdateStatus;
