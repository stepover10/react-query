import useSWR, { mutate } from 'swr'
import axios from 'axios';

const queryKey = 'api/user';
const requsetAddUser = async (data) => {
  const res = await axios.post(`http://localhost:8000/api/user`, data);
  return res;
}

const UserAddBtn = () => {

  return (
    <button onClick={ async () => {
      // update the local data immediately, but disable the revalidation
      await requsetAddUser({
        id: 1,
        name: "chan3",
        email: "test@" + Math.random(),
        password: Math.random()
      })

      mutate('/api/users');
    }}>
      Add User
    </button>
  );
};

export default UserAddBtn;
