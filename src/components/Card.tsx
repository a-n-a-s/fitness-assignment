import React from "react";

const Card = () => {
  return (
    <div className="my-20">
      <div className="my-10 w-5/6 bg-lime-400 text-black h-40 mx-auto flex items-center justify-start p-4  rounded-lg">
        <p className="text-6xl font-bold text-center">Personal Training</p>
      </div>
      <div className="my-10 w-5/6 bg-black text-lime-400 h-40 mx-auto flex items-center justify-end p-4 rounded-lg">
        <p className="text-6xl font-bold text-center">Group Fitness Classes</p>
      </div>
      <div className="my-10 w-5/6 bg-lime-400 text-black h-40 mx-auto flex items-center justify-start p-4  rounded-lg">
        <p className="text-6xl font-bold text-center">Functional Training</p>
      </div>
    </div>
  );
};

export default Card;
