"use client";
import React, { useState } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-[#ededed] p-8 flex justify-between items-center ">
      <div>
        <h1 className="text-3xl font-bold text-center">ZONIXX</h1>
      </div>
      <div>
        <ul className="flex items-center gap-12 hidden md:flex">
          <li className="hover:text-lime-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-lime-400">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-lime-400">
            <Link href="/workouts">Workouts</Link>
          </li>
          <li className="hover:text-lime-400">
            <Link href="/tracker">Tracker</Link>
          </li>
          <li className="hover:text-lime-400">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <MenuIcon
              className="text-2xl cursor-pointer md:hidden mx-auto my-2"
            />
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-[#ededed] border-l-lime-400">
            <VisuallyHidden>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>Access different sections of the app</SheetDescription>
            </VisuallyHidden>
            <ul className="flex flex-col items-center gap-8 mt-10 text-xl">
              <li className="hover:text-lime-400" onClick={() => setIsOpen(false)}>
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-lime-400" onClick={() => setIsOpen(false)}>
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-lime-400" onClick={() => setIsOpen(false)}>
                <Link href="/workouts">Workouts</Link>
              </li>
              <li className="hover:text-lime-400" onClick={() => setIsOpen(false)}>
                <Link href="/tracker">Tracker</Link>
              </li>
              <li className="hover:text-lime-400" onClick={() => setIsOpen(false)}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
