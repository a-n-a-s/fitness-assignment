import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WorkoutCardProps {
  name: string;
  target: string;
  secondaryMuscles: string[];
  difficulty: string;
  category: string;
  description: string;
  instructions: string[];
  equipment: string;
  bodyPart: string;
  id: string;
  onClick?: () => void;
}

const WorkoutCard = ({
  name,
  target,
  secondaryMuscles,
  difficulty,
  category,
  description,
  instructions,
  equipment,
  bodyPart,
  id,
  onClick,
}: WorkoutCardProps) => {
  return (
    <Card className="bg-lime-400 w-11/12 md:w-5/6 mx-auto my-10 rounded-2xl shadow-xl overflow-hidden border border-lime-500 hover:scale-105 transition-transform duration-300 ">
      <CardHeader className="bg-lime-500 px-6 py-5">
        <CardTitle className="text-2xl md:text-xl font-bold capitalize">{name}</CardTitle>
        <CardDescription className="text-sm md:text-base opacity-80 capitalize text-black">{target}</CardDescription>
      </CardHeader>

      <CardContent className="p-6 space-y-5 text-md md:text-md">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-lime-300 rounded-xl p-4">
            <span className="font-semibold">Difficulty:</span>
            <p className="capitalize">{difficulty}</p>
          </div>

          <div className="bg-lime-300 rounded-xl p-4">
            <span className="font-semibold">Category:</span>
            <p className="capitalize">{category}</p>
          </div>

          <div className="bg-lime-300 rounded-xl p-4">
            <span className="font-semibold">Equipment:</span>
            <p className="capitalize">{equipment}</p>
          </div>

          <div className="bg-lime-300 rounded-xl p-4">
            <span className="font-semibold">Body Part:</span>
            <p className="capitalize">{bodyPart}</p>
          </div>
        </div>

        <div className="border-t border-lime-500 pt-4">
          <h3 className="font-bold text-lg mb-2">Description</h3>
          <p className="text-md md:text-sm">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button asChild className="bg-black text-white hover:bg-zinc-800 px-4 py-2 rounded-md cursor-pointer">
          <Link href={`/workouts/${id}`} as={`/workouts/${id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
