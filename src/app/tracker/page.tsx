"use client";

import { Droplet, FlameIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Exercise = {
  id: number;
  name: string;
  reps: string;
  muscleTrained: string;
  restTime: string;
};

const page = () => {
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: 1,
      name: "Push-Ups",
      reps: "3 x 15",
      muscleTrained: "Chest, Triceps",
      restTime: "60 sec",
    },
    {
      id: 2,
      name: "Squats",
      reps: "4 x 12",
      muscleTrained: "Quads, Glutes",
      restTime: "90 sec",
    },
    {
      id: 3,
      name: "Plank",
      reps: "3 x 45 sec",
      muscleTrained: "Core",
      restTime: "45 sec",
    },
    {
      id: 4,
      name: "Pull-Ups",
      reps: "3 x 8",
      muscleTrained: "Back, Biceps",
      restTime: "90 sec",
    },
  ]);

  const [newExercise, setNewExercise] = useState({
    name: "",
    reps: "",
    muscleTrained: "",
    restTime: "",
  });

  const updateExercise = (
    id: number,
    field: keyof Omit<Exercise, "id">,
    value: string
  ) => {
    setExercises((prev) =>
      prev.map((exercise) =>
        exercise.id === id ? { ...exercise, [field]: value } : exercise
      )
    );
  };

  const addExercise = () => {
    if (
      !newExercise.name.trim() ||
      !newExercise.reps.trim() ||
      !newExercise.muscleTrained.trim() ||
      !newExercise.restTime.trim()
    ) {
      return;
    }

    setExercises((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newExercise.name.trim(),
        reps: newExercise.reps.trim(),
        muscleTrained: newExercise.muscleTrained.trim(),
        restTime: newExercise.restTime.trim(),
      },
    ]);

    setNewExercise({
      name: "",
      reps: "",
      muscleTrained: "",
      restTime: "",
    });
  };

  const removeExercise = (id: number) => {
    setExercises((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  return (
    <div className="w-11/12 mx-auto my-10 ">
      <div className="flex rounded-2xl p-6 gap-4">
        <Card className="w-1/2 bg-transparent border-0 shadow-none p-0 flex flex-col items-center justify-center gap-4">
          <CardContent className="p-4 flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl md:text-3xl text-white">
              H <sub>2</sub> O
            </h2>
            <Droplet className="text-lime-400" size={160} fill="currentColor" />
            <p className="text-white md:text-3xl text-center">98.5%</p>
          </CardContent>
        </Card>
        <Card className="w-1/2 bg-transparent border-0 shadow-none p-0 flex flex-col items-center justify-center gap-4">
          <CardContent className="p-4 flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl md:text-3xl text-white">Calories</h2>
            <FlameIcon className="text-lime-400" fill="currentColor" size={160} />
            <p className="text-white md:text-3xl text-center">1200</p>
          </CardContent>
        </Card>
      </div>
      <div className="bg-lime-400 rounded-xl p-8 my-10">
        <h2 className="text-4xl text-white font-bold">Workouts</h2>
        <div className="mt-6 overflow-x-auto rounded-lg">
          <Table className="w-full text-left text-white border-0">
            <TableHeader>
              <TableRow className="bg-white/20 border-white/30 hover:bg-white/20">
                <TableHead className="px-4 py-3 font-semibold text-white">Name</TableHead>
                <TableHead className="px-4 py-3 font-semibold text-white">Reps</TableHead>
                <TableHead className="px-4 py-3 font-semibold text-white">Muscle Trained</TableHead>
                <TableHead className="px-4 py-3 font-semibold text-white">Rest Time</TableHead>
                <TableHead className="px-4 py-3 font-semibold text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exercises.map((exercise, index) => (
                <TableRow
                  key={exercise.id}
                  className={`border-t border-white/30 hover:bg-white/10 ${index % 2 === 1 ? "bg-white/10 hover:bg-white/20" : ""}`}
                >
                  <TableCell className="px-4 py-3 border-0">
                    <Input
                      value={exercise.name}
                      onChange={(e) =>
                        updateExercise(exercise.id, "name", e.target.value)
                      }
                      className="w-full bg-transparent border-white/30 rounded-md px-2 py-1 text-white placeholder-white/60 outline-none focus-visible:ring-lime-600 h-9"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-3 border-0">
                    <Input
                      value={exercise.reps}
                      onChange={(e) =>
                        updateExercise(exercise.id, "reps", e.target.value)
                      }
                      className="w-full bg-transparent border-white/30 rounded-md px-2 py-1 text-white placeholder-white/60 outline-none focus-visible:ring-lime-600 h-9"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-3 border-0">
                    <Input
                      value={exercise.muscleTrained}
                      onChange={(e) =>
                        updateExercise(
                          exercise.id,
                          "muscleTrained",
                          e.target.value
                        )
                      }
                      className="w-full bg-transparent border-white/30 rounded-md px-2 py-1 text-white placeholder-white/60 outline-none focus-visible:ring-lime-600 h-9"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-3 border-0">
                    <Input
                      value={exercise.restTime}
                      onChange={(e) =>
                        updateExercise(exercise.id, "restTime", e.target.value)
                      }
                      className="w-full bg-transparent border-white/30 rounded-md px-2 py-1 text-white placeholder-white/60 outline-none focus-visible:ring-lime-600 h-9"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-3 border-0">
                    <Button
                      variant="ghost"
                      onClick={() => removeExercise(exercise.id)}
                      className="rounded-md bg-white/20 px-3 py-1 text-white hover:bg-white/30 hover:text-white h-9"
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-5">
          <Input
            value={newExercise.name}
            onChange={(e) =>
              setNewExercise((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Exercise name"
            className="bg-white/10 border-white/30 rounded-md px-3 py-2 text-white placeholder-white/70 outline-none focus-visible:ring-lime-600"
          />
          <Input
            value={newExercise.reps}
            onChange={(e) =>
              setNewExercise((prev) => ({ ...prev, reps: e.target.value }))
            }
            placeholder="Reps"
            className="bg-white/10 border-white/30 rounded-md px-3 py-2 text-white placeholder-white/70 outline-none focus-visible:ring-lime-600"
          />
          <Input
            value={newExercise.muscleTrained}
            onChange={(e) =>
              setNewExercise((prev) => ({
                ...prev,
                muscleTrained: e.target.value,
              }))
            }
            placeholder="Muscle trained"
            className="bg-white/10 border-white/30 rounded-md px-3 py-2 text-white placeholder-white/70 outline-none focus-visible:ring-lime-600"
          />
          <Input
            value={newExercise.restTime}
            onChange={(e) =>
              setNewExercise((prev) => ({ ...prev, restTime: e.target.value }))
            }
            placeholder="Rest time"
            className="bg-white/10 border-white/30 rounded-md px-3 py-2 text-white placeholder-white/70 outline-none focus-visible:ring-lime-600"
          />
          <Button
            variant="ghost"
            onClick={addExercise}
            className="rounded-md bg-white/20 px-4 py-2 font-semibold text-white hover:bg-white/30 hover:text-white"
          >
            Add Exercise
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
