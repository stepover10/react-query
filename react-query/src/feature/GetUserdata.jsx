import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

export default function Todo() {
  const queryClient = useQueryClient();

  const { isLoading, error, data:res } = useQuery("user", async () => {
    const res = await axios.get("http://localhost:8000/api/users");
    return res;
  });

  useQuery("intoAPP", async () => {
    return {
      id: 'stepover10@email.com',
      role: 'SUPER_ADMIN'
    };
  });

  
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
     API CALL! : http://localhost:8000/api/users
    </div>
  );
}
