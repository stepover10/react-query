import GetUser from "../app.componets/GetUser";
import UpdateStatus from "../app.componets/UpdateStatus";
import CartItem from "../app.componets/CartItem";
import CartItemGet from "../app.componets/CartItemGet";
import Favorite from "../app.componets/Favorite";

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
