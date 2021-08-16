import { QueryClient, useQueryClient, useQuery } from "react-query";
import { Hydrate, dehydrate } from "react-query/hydration";
import axios from "axios";
import UserList from "../app.componets/user/UserList";
import UserAddBtn from "../app.componets/user/UserAddbton";
import { queryClient } from './_app'

const PageUser = ({dataset}) => {
  return (
    <>
      <UserAddBtn />
      <UserList dataset={dataset} />
    </>
  );
};

PageUser.getInitialProps = async () => {
  const res = await axios.get(`http://localhost:8000/api/users`);
  return {
    dataset: res.data.result
  };
};

export default PageUser;
