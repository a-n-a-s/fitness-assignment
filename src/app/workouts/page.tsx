"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkoutCard from "@/components/WorkoutCard";

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
}

const page = () => {
  const [workouts, setWorkouts] = useState<WorkoutCardProps[]>([]);

  useEffect(() => {
    axios
      .get("https://exercisedb.p.rapidapi.com/exercises", {
        params: {
          sortMethod: "bodyPart",
          offset: 0,
          limit: 100,
          sortOrder: "ascending",
        },
        headers: {
          "x-rapidapi-key":
            "ff65257e94mshc3dade9304f0683p19c14ajsncf7d71a640ed",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      })
      .then((response) => {
        console.log(response.data);
        setWorkouts(response.data);
      })
      .catch((error) => {
        console.error(error.response?.data || error.message);
      });
  }, []);
  console.log(workouts);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold capitalize text-center text-white my-10 ">
        Workouts
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2">
        {workouts.map((workout) => (
          <WorkoutCard {...workout} key={workout.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
