import axios from "axios";
import useSWR, { mutate } from 'swr'

const requestDeleteUser = async (userId) => {
  const res = await axios.delete(`http://localhost:8000/api/user/${userId}`);
  return res;
};

export default function PostUpdateUserList({ userId }) {
  return (
    <button
      onClick={ async () => {
        await requestDeleteUser(userId)
        mutate('/api/users');
      }}
    >
      삭제
    </button>
  );
}

