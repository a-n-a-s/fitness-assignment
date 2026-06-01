import React from "react";
import { Card as ShadcnCard } from "@/components/ui/card";

const Card = () => {
  return (
    <div className="my-20">
      <ShadcnCard className="my-10 w-5/6 bg-lime-400 text-black h-40 mx-auto flex items-start justify-center  p-4 rounded-lg border-0">
        <p className="lg:text-6xl font-bold text-right text-2xl">Personal Training</p>
      </ShadcnCard>
      <ShadcnCard className="my-10 w-5/6 bg-black text-lime-400 h-40 mx-auto flex items-end md:justify-center justify-start p-4 rounded-lg border-0">
        <p className="lg:text-6xl font-bold text-center text-2xl">Group Fitness Classes</p>
      </ShadcnCard>
      <ShadcnCard className="my-10 w-5/6 bg-lime-400 text-black h-40 mx-auto flex items-start justify-center p-4 rounded-lg border-0">
        <p className="lg:text-6xl font-bold text-center text-2xl">Functional Training</p>
      </ShadcnCard>
    </div>
  );
};

export default Card;
