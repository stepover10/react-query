import { useQuery } from "react-query";
import useGetUser from "../app.hook/useGetUser";

export const featchCartItem = () => {
  return {
    count: 0
  }
}

const GetUser = () => {
  const getUser = useGetUser();
  const {data} = useQuery('action/cart', featchCartItem) 

  if (!data) return null;

  console.log(Date.now());
  console.log('index', getUser);
  
  return (
    <div>
      <div>getUser: {getUser.id}</div>
      <div>getUser: {getUser.name}</div>
      
      <div>
        cartCount : {data.count}    
      </div>
    </div>
  );
};

export default GetUser;
