"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";

import Logo from "../Logo";
import Toolbar from "../Toolbar";

import { SlMenu } from "react-icons/sl";

const Navbar = ({ children }: { children?: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center">
      <Logo />

      {/* For mobile devices */}
      <div
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
        className="block lg:hidden z-40 text-3xl cursor-pointer hover:font-bold hover:text-pink-500"
      >
        <SlMenu />
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 w-full h-full bg-zinc-900/90 z-30">
          <ul className="h-full flex flex-col flex-1 justify-center items-center gap-2">
            <li>Home</li>
            <li>About me</li>
            <li>My projects</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

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

const HamburgerItem = () => {
  return <li></li>;
};
