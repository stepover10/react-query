import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const requestPatchUser = async (data) => {
  const res = await axios.patch(`http://localhost:8000/api/user/${data.id}`, data);
  return res.data.result;
}

export default function UpdateUser() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation(requestPatchUser, {
    onSuccess: async response => {
      /* query: user 새로고침 */      
      queryClient.setQueryData('user', (res) => {
        res.data.result[0] = response;
        return res
      })    
    },
  });

  return (
    <button
      onClick={() => {
        mutation.mutate({ 
          id: 1,
          name: "chan3",
          email: "test@" + Math.random(),
          password: Math.random()
        })
      }}
     >  
       update
    </button>
  );
}
