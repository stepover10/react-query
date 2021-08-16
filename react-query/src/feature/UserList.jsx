import { useQuery } from "react-query";
import DeleteUser from "./DeleteUser";

export default function UserList() {
  /** 
   * @user === key
   * @main === namespace key
   * **/
  const { isLoading, error, data:res } = useQuery("user");
  const intoAPP = useQuery("intoAPP");
  
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  console.log(intoAPP.data);

  return (
    <div>      
      😁😁😂😁😀😀
      {res.data.result.map((v,i) => {
        return (
          <div key={i} style={{margin: '5px 0'}}>
            {v.name} -- {v.email}
            <DeleteUser userId={v.id} />
          </div>
        )
      })}
    </div>
  );
}
