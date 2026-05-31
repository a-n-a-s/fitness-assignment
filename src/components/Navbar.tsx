"use client";
import React, { useState } from "react";
import { MenuIcon } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] text-[#ededed] p-8 flex justify-between items-center fixed top-0 w-full z-50">
      <div>
        <h1 className="text-3xl font-bold text-center">ZONIXX</h1>
      </div>
      <div>
        <ul className="flex items-center gap-12 hidden md:flex">
          <li className="hover:text-lime-400">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-lime-400">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-lime-400">
            <a href="/workouts">Workouts</a>
          </li>
          <li className="hover:text-lime-400">
            <a href="/tracker">Tracker</a>
          </li>
          <li className="hover:text-lime-400">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <MenuIcon
          className="text-2xl cursor-pointer md:hidden mx-auto my-2"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <ul className="flex flex-col items-center gap-4">
            <li className="hover:text-lime-400">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-lime-400">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-lime-400">
              <a href="/workouts">Workouts</a>
            </li>
            <li className="hover:text-lime-400">
              <a href="/tracker">Tracker</a>
            </li>
            <li className="hover:text-lime-400">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
