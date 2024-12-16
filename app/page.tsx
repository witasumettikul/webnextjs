import HelloWorld from "@/components/HelloWorld";
import Image from "next/image";

export default function Home() {
  return (
    <div>
   <h1 className="text-2xl font-bold">Home Page</h1>
   <a href="http://localhost:3000/about" className="text-blue-500 underline">About Page</a>
   </div>
  );
}
