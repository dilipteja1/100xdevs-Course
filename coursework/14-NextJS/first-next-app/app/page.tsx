import Image from "next/image";
import axios from "axios";
import { use } from "react";

async function getUserData() {
  await new Promise((r) => setTimeout(r, 5000))
  try{
    const response =  await axios.get("http://localhost:3000/api/user")
    return (await response).data;
  }catch(e){
    console.log(e)
  }
 
} 
 export default async function Home() {
  const userDetails = await getUserData();
  return (
   <div>Hello world
    {userDetails?.email}
    {userDetails?.name}

   </div>
   
  );
}
