"use client";
import { ConstructionIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

interface Workout {
  bodyPart: string;
  equipment: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
  description: string;
  difficulty: string;
  category: string;
}

const page = () => {
  const params = useParams();
  const id = params.id;

  const [workout, setWorkout] = useState<Workout>({} as Workout);

  useEffect(() => {
    axios
      .get(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, {
        params: {},
        headers: {
          "x-rapidapi-key":
            "ff65257e94mshc3dade9304f0683p19c14ajsncf7d71a640ed",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      })
      .then((response) => {
        console.log(response.data);
        setWorkout(response.data);
      })
      .catch((error) => {
        console.error(error.response?.data || error.message);
      });
  }, [id]);

  return (
    <div className="min-h-screen  text-white">
      <div className="max-w-6xl mx-auto p-6">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <img
              src="/workout.svg"
              alt={workout?.name}
              className="w-full h-full object-cover"
            />
          </div>


          <div className="flex flex-col gap-2">
            <span className="px-4 py-2 rounded-full bg-lime-500/20 text-lime-400 ">
              {workout?.target}
            </span>

            <h1 className="text-4xl md:text-3xl font-black mt-4 capitalize ">
              {workout?.name}
            </h1>

            <p className="text-white  text-lg mt-6">{workout?.description}</p>


            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-zinc-900 p-4 rounded-2xl">
                <p className="text-zinc-500 text-sm">Difficulty</p>
                <p className="font-bold text-lime-400">{workout?.difficulty}</p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-2xl">
                <p className="text-zinc-500 text-sm">Equipment</p>
                <p className="font-bold">{workout?.equipment}</p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-2xl">
                <p className="text-zinc-500 text-sm">Body Part</p>
                <p className="font-bold">{workout?.bodyPart}</p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-2xl">
                <p className="text-zinc-500 text-sm">Target</p>
                <p className="font-bold">{workout?.target}</p>
              </div>
            </div>
          </div>
        </div>

        
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Secondary Muscles</h2>

          <div className="flex flex-wrap gap-3">
            {workout?.secondaryMuscles?.map((muscle) => (
              <span
                key={muscle}
                className="px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400"
              >
                {muscle}
              </span>
            ))}
          </div>
        </section>

        
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Instructions</h2>

          <div className="space-y-6">
            {workout?.instructions?.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 bg-zinc-900 p-5 rounded-2xl items-center"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-lime-500 text-black font-bold shrink-0">
                  {index + 1}
                </div>

                <p className="text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;

// {
//     "bodyPart": "back",
//     "equipment": "body weight",
//     "id": "3293",
//     "name": "archer pull up",
//     "target": "lats",
//     "secondaryMuscles": [
//         "biceps",
//         "forearms"
//     ],
//     "instructions": [
//         "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
//         "Engage your core and pull your shoulder blades down and back.",
//         "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
//         "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
//         "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
//         "Alternate sides with each repetition."
//     ],
//     "description": "The archer pull up is a challenging bodyweight exercise that targets the lats and requires significant strength, coordination, and control. It involves pulling up with one arm while the other remains straight, alternating sides with each repetition.",
//     "difficulty": "advanced",
//     "category": "strength"
// }
