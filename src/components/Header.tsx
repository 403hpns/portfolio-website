"use client";

import { ReactNode, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "./ui/Button";

const Header = ({ children }: { children?: ReactNode }) => {
  const getCurrentAge = useMemo(
    () => new Date().getFullYear() - 2000 || 23,
    []
  );

  return (
    <header className="flex flex-col my-12">
      <div className="flex flex-col justify-center gap-12 h-full  leading-none">
        <p className="font-semibold text-8xl text-center lg:text-left">
          Hello,{" "}
          <TypeAnimation
            sequence={["friend.", 2000, "world.", 2000]}
            repeat={Infinity}
            wrapper="span"
            className="block font-normal text-primary"
          />
        </p>

        <p className="leading-tight text-2xl text-justify">
          I’m Kuba, {getCurrentAge} y.o. guy from Poland, a passionate{" "}
          <span className="x font-semibold text-[#6C63FF] tracking-wide ">
            self-taught
          </span>{" "}
          full-stack developer. It&apos;s great to see you here!
          <p className="hidden lg:inline">
            This is my place on the Internet, which I am very happy to introduce
            to you. What would you like to do first?
          </p>{" "}
        </p>

        <div className="flex flex-col justify-between items-center">
          <Button>Know me</Button>
          <Button>See my projects</Button>
          <p className="hidden lg:block">or just</p>
          <Button>Get contact</Button>
        </div>
      </div>
      <div>2</div>
    </header>
  );
};

export default Header;
