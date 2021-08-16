import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const requestCreateUser = async (data) => {
  const res = await axios.post("http://localhost:8000/api/user", data);
  return res;
}

export default function PostCreateUser() {
  const queryClient = useQueryClient();
  const mutation = useMutation(requestCreateUser, {
    onSuccess: () => {
      /* query: user 새로고침 */
      queryClient.invalidateQueries('user');    
    },
  });

  return (
     <button
      onClick={() => {
        mutation.mutate({ 
          name: "admin",
          email: "test@" + Math.random(),
          password: Math.random()
        })
      }}
     >  
       create
    </button>
  );
}
