import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
const Header = () => {
  return (
    <header className="sticky top-0 grid grid-cols-3 w-full bg-white shadow-md p-5 md:p-6  z-50">
      <div className="relative flex  items-center h-10 my-auto  cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center border-2 md:border-2 py-2 px-2 rounded-full ">
        <input
          type="text"
          className="pl-2 bg-transparent text-sm placeholder-gray-400 text-gray-600 w-full  outline-none"
          placeholder="Search"
        />
        <MagnifyingGlassIcon className="h-8 hidden md:inline-flex bg-red-400 p-2 rounded-full cursor-pointer font-bold text-white" />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 text-gray-600 cursor-pointer" />
        <div className="flex space-x-1 md:space-x-4 items-center rounded-full border-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className=" text-gray-600 cursor-pointer h-6"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 cursor-pointer text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};
export default Header;
