"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlMenu } from "react-icons/sl";

import Logo from "../Logo";
import Toolbar from "../Toolbar";

const Navbar = ({ children }: { children?: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav");
      if (window.scrollY > 100) {
        nav?.classList.add("nav-fixed");
      } else {
        nav?.classList.remove("nav-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Blokuj przewijanie strony, gdy menu jest otwarte
      document.body.style.overflow = "hidden";
    } else {
      // Przywróć normalne przewijanie strony, gdy menu jest zamknięte
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className="nav flex justify-between items-center p-4">
      <Logo />

      {/* For mobile devices */}
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

      {/* For other devices */}
      <div className="hidden lg:block">
        <ul className="flex justify-between rounded bg-zinc-900/90">
          <ListItem href="#about">About me</ListItem>
          <ListItem href="#projects">My projects</ListItem>
          <ListItem href="#contact">Contact</ListItem>
          <ListItem href="#">Resume</ListItem>
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

const ListItem = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} className="py-4 px-12 transition-colors hover:bg-primary">
      <li>{children}</li>
    </Link>
  );
};
