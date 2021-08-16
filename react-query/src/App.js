import { QueryClient, QueryClientProvider } from "react-query";
import GetUserdata from "./feature/GetUserdata";
import PostCreateUser from "./feature/PostCreateUser";
import UserList from "./feature/UserList";
import UpdateUser from "./feature/UpdateUser";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetUserdata />
      
      <PostCreateUser />
      <UpdateUser />


      {/* store? */}
      <UserList />
    </QueryClientProvider>
  );
}
