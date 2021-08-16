import GetUser from "../app.componets/main/GetUser";
import UpdateStatus from "../app.componets/main/UpdateStatus";
import CartItem from "../app.componets/main/CartItem";
import CartItemGet from "../app.componets/main/CartItemGet";
import Favorite from "../app.componets/main/Favorite";

const Index = () => {  
  return (
    <div>
      <GetUser />
    
      <CartItem />    
      <CartItemGet />
      
      <UpdateStatus />  
      <Favorite />
    </div>
  );
};

export default Index;
