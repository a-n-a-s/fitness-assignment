import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className=" text-[#ededed] text-center my-20 ">
      <p className="md:text-xl tracking-wider text-lg">Achieve your fitness goal</p>
      <div className="md:text-8xl tracking-wider mt-20 mb-10 flex flex-col gap-6 text-lime-400 text-4xl">
        <p>FIND YOUR </p>
        <p>STRENGTH</p>
      </div>
       <div className="md:text-8xl bg-lime-400 text-black p-10 tracking-wider mb-20 flex flex-col gap-6 text-4xl">
        <p>INSIDE</p>
        <p>AND OUT.</p>
      </div>
      <div>
        <Button className="text-lg bg-lime-400 text-black px-6 py-4 rounded-md hover:bg-lime-500 cursor-pointer h-auto font-normal">Join Today</Button>
      </div>

    </div>
  );
};

export default Hero;
