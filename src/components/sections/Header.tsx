"use client";

import { ReactNode, useCallback, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";

import Button from "../ui/Button";
import Image from "next/image";

import { motion } from "framer-motion";

import hackerImage from "@/assets/hacker.svg";
import { GET_MY_AGE } from "@/shared/constants";

const Header = () => {
  const removeOpaciyWhenImageLoaded = useCallback((img: HTMLImageElement) => {
    img.classList.remove("opacity-0");
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex justify-between items-center"
    >
      <div className="flex flex-col justify-center gap-12 min-w-1/2 leading-none">
        <div className="font-semibold text-6xl text-center lg:text-left">
          Hello,{" "}
          <TypeAnimation
            sequence={["friend.", 2000, "world.", 2000]}
            repeat={Infinity}
            wrapper="span"
            className="block font-normal text-primary"
          />
        </div>

        <div className="leading-tight text-3xl text-justify">
          I’m Kuba, {GET_MY_AGE} y.o. guy from Poland, a passionate{" "}
          <span className="font-semibold text-[#6C63FF] tracking-wide ">
            self-taught
          </span>{" "}
          full-stack developer. It&apos;s great to see you here! What would you
          like to do first?
        </div>

        <div className="lg:flex lg:justify-between lg:items-center lg:gap-4">
          <Button href="#about">Know me</Button>
          <Button href="#projects">See projects</Button>
          <p className="hidden lg:block">or just</p>
          <Button href="#contact">Get contact</Button>
        </div>
      </div>

      <Image
        src={hackerImage}
        alt=""
        className="hidden lg:block transition-opacity opacity-0 duration-500"
        onLoadingComplete={removeOpaciyWhenImageLoaded}
      />
    </motion.header>
  );
};

export default Header;
