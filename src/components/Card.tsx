import React from "react";

const Card = () => {
  return (
    <div className="my-20">
      <div className="my-10 w-5/6 bg-lime-400 text-black h-40 mx-auto flex items-center justify-start p-4  rounded-lg">
        <p className="lg:text-6xl font-bold text-center text-2xl">Personal Training</p>
      </div>
      <div className="my-10 w-5/6 bg-black text-lime-400 h-40 mx-auto flex items-center md:justify-end justify-start p-4 rounded-lg">
        <p className="lg:text-6xl font-bold text-center text-2xl">Group Fitness Classes</p>
      </div>
      <div className="my-10 w-5/6 bg-lime-400 text-black h-40 mx-auto flex items-center justify-start p-4  rounded-lg">
        <p className="lg:text-6xl font-bold text-center text-2xl">Functional Training</p>
      </div>
    </div>
  );
};

export default Card;
