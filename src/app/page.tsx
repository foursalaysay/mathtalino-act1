
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-center pt-10">
      
      <h1 className="text-6xl font-black mb-4">Welcome to Math Talino</h1>
      <p className="mb-6">Discover the fun way to learn mathematics through interactive 3D games!</p>
      <Image 
        src="/picture.png" 
        alt="Math Talino Screenshot" 
        className="mx-auto mb-6 rounded-lg shadow-md"
        height={200}
        width={200}
      />
      <Button asChild className="w-96 bg-yellow-400 h-20 text-xl">
        <a href="https://example.com/download" target="_blank" rel="noopener noreferrer">
          Download Math Talino
        </a>
      </Button>
  </div>
  );
}
