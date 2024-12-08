"use client";

import { ReactNode, useState, useEffect, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { SlMenu } from "react-icons/sl";
import Link from "next/link";

import Logo from "../Logo";
import Toolbar from "../Toolbar";
import Button from "../ui/Button";

const Navbar = ({ children }: PropsWithChildren) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-6 2xl:px-40 flex justify-between items-center z-50 bg-black/50 before:absolute before:inset-0 before:w-full before:h-full before:backdrop-blur-xl before:-z-50">
      <Logo />

      <div
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
        className="block lg:hidden z-40 text-3xl cursor-pointer hover:font-bold hover:text-pink-500"
      >
        <SlMenu />
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, top: "-100vh" }}
          animate={{ opacity: 1, top: 0 }}
          className="fixed inset-0 w-screen h-screen bg-zinc-900/90 z-30 overflow-hidden"
        >
          <ul className="h-full flex flex-col flex-1 justify-center items-center gap-2">
            <HamburgerItem href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </HamburgerItem>
            <HamburgerItem
              href="#about"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              About me
            </HamburgerItem>
            <HamburgerItem
              href="#projects"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              My projects
            </HamburgerItem>
            <HamburgerItem
              href="#contact"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Contact
            </HamburgerItem>
          </ul>
        </motion.div>
      )}

      <div className="hidden lg:block">
        <ul className="flex justify-between rounded">
          <Button icon={false} variant="navigation" href="#about">
            About me
          </Button>
          <Button icon={false} variant="navigation" href="#projects">
            My projects
          </Button>
          <Button icon={false} variant="navigation" href="#contact">
            Contact
          </Button>
        </ul>
      </div>

      <Toolbar />

      {children}
    </nav>
  );
};

export default Navbar;

const HamburgerItem = ({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="my-4 uppercase text-4xl hover:font-semibold hover:text-pink-500 "
    >
      {children}
    </Link>
  );
};
