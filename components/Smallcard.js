import Image from "next/image";
import React from "react";

const Smallcard = ({ data }) => {
  const { img, location, distance } = data;
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl transition duration-200 cursor-pointer hover:scale-105 transform ease-out  hover:bg-gray-100">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="font-semibold">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default Smallcard;
