import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const requestDeleteUser = async ({userId}) => {
  const res = await axios.delete(`http://localhost:8000/api/user/${userId}`);
  return res;
};

export default function PostUpdateUserList({ userId }) {
  const queryClient = useQueryClient();
  const mutation = useMutation(requestDeleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('user')
    },
  });

  return (
    <button
      onClick={() => {
        mutation.mutate({ userId })
      }}
    >
      삭제
    </button>
  );
}

