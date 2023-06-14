"use client";

import { ReactNode } from "react";
import Link from "next/link";

import Logo from "./Logo";
import Toolbar from "./Toolbar";

import { SlMenu } from "react-icons/sl";

const Navbar = ({ children }: { children?: ReactNode }) => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />

      {/* For mobile devices */}
      <div className="block lg:hidden text-3xl cursor-pointer hover:font-bold hover:text-primary">
        <SlMenu />
      </div>

      {/* For other devices */}
      <div className="hidden lg:block">
        <ul className="p-4 flex justify-between gap-20 rounded bg-zinc-900/90">
          <Link href="#about">About</Link>
          <Link href="#projects">My projects</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#">Resume</Link>
        </ul>
      </div>

      <Toolbar />

      {children}
    </nav>
  );
};

export default Navbar;
