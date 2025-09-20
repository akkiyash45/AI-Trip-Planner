import { Button } from "@/components/ui/button";
import Image from "next/image";
import Herosection from "./_components/Herosection";
import { Popularcity } from "./_components/Popularcity";

export default function Home() {
  return (
   <div>
    <Herosection/>
    <Popularcity/>
    
   </div>
  );
}
