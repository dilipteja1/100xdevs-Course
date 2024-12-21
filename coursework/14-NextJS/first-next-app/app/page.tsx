import Image from "next/image";
import axios from "axios";
import { use } from "react";

async function getUserData() {
  await new Promise((r) => setTimeout(r, 5000))
  const response = axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return (await response).data
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
