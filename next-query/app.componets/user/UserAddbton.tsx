import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from 'axios';

const queryKey = 'api/user';
const requsetAddUser = async (data) => {
  const res = await axios.post(`http://localhost:8000/api/user`, data);
  return res;
}

const UserAddBtn = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(requsetAddUser, {
    onSuccess: (res) => {
      /* query: user 새로고침 */
      queryClient.invalidateQueries(queryKey);
      
      // queryClient.setQueryData(queryKey, (prev) => {    
      //   return {
      //     ...prev,
      //     ...res.data.result
      //   }
      // })
    }
  });

  // console.log('re-render-button', mutation);
  
  return (
    <button onClick={() => {
      mutation.mutate({ 
        name: "admin",
        email: "test@" + Math.random(),
        password: Math.random()
      })
    }}>
      Add User
    </button>
  );
};

export default UserAddBtn;
