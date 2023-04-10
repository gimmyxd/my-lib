import axios from "axios";
import { useQuery } from "react-query";



export default function Repositories() {

  const { data } = useQuery(["repo"], () =>
    axios
      .get("https://api.github.com/users/gimmyxd/repos")
      .then((res) => res.data)
  );
  return data
}



