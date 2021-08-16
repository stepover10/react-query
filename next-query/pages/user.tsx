import useGetUser from "../app.hook/useGetUser";
import { QueryClient, useQueryClient } from "react-query";
import { Hydrate, dehydrate } from "react-query/hydration";

const PageUser = (props:any) => {
  const getUser = useGetUser();
  
  console.log(getUser, props);
  
  return (
    <div>
     PageUser
     <button></button>
    </div>
  );
};

PageUser.getInitialProps = async () => {

  return {
    name: 'page'
  };
};

export default PageUser;
