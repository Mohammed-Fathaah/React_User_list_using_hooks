import React, { useEffect,useState } from "react";
import Userlist from "./Components/Userlist";

function App() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch("/users.json")
    .then((response)=>response.json())
    .then((data)=>setUsers(data))
    .catch((error)=>console.error("Error fetching data"));
  },[]);

  return (
    <>
      <h1>User List</h1>
      <UserList users={users} />
    </>
  );
}

export default App;