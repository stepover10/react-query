import { QueryObserver, useQueryClient, useQuery } from "react-query";
import axios from "axios";

const queryKey = 'api/user';
const req = async () => {
  const res = await axios.get(`http://localhost:8000/api/users`);
  return res.data.result
}

const UserList:any = ({ dataset }) => {

  const {isLoading, error, data} = useQuery(queryKey, req, {
    initialData: dataset
  })

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred";

  console.log(data);

  return (
    <div>
     🐹 User List!
      {data.map((user, userIdx) => {
        return (
          <div key={userIdx} style={{margin: '5px 0'}}>
            {user.name} -- {user.email}
          </div>
        )
      })}      
    </div>
  );
};

export default UserList;
