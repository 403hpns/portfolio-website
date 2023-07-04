"use client";

import Link from "next/link";
import { AiFillCode } from "react-icons/ai";
import { PageSections } from "./sections/Navbar";

const Logo = () => {
  return (
    <Link
      href={PageSections.HOME}
      className="text-7xl cursor-pointer hover:text-primary hover:scale-105"
    >
      <AiFillCode />
    </Link>
  );
};

export default Logo;
