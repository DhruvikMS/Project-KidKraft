import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export function FlipCard({ frontContent, backContent, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={cn("flip-card cursor-pointer", isFlipped ? "flipped" : "", className)}
      onClick={toggleFlip}
    >
      <div className="flip-card-inner relative w-full h-full">
        <div className="flip-card-front absolute w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
          {frontContent}
        </div>
        <div className="flip-card-back absolute w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
          {backContent}
        </div>
      </div>
    </div>
  );
}
