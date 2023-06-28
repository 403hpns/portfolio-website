"use client";

import Link from "next/link";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import Button from "../ui/Button";
import Input from "../ui/Input";

import { motion } from "framer-motion";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col justify-center items-center gap-10 p-4"
      initial={{ opacity: 0, top: -100 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="uppercase text-6xl font-semibold">
        Get in <p className="text-primary">touch.</p>
      </h2>

      <div className="flex justify-center items-center flex-wrap w-full gap-8">
        <Button
          variant={"contact"}
          icon={false}
          onClick={() =>
            document.querySelector(".form")?.classList.toggle("hidden")
          }
        >
          <AiOutlineMail />
        </Button>

        <Button
          variant="contact"
          icon={false}
          href="https://github.com/403hpns"
        >
          <AiFillGithub />
        </Button>

        <Button
          variant="contact"
          icon={false}
          href="https://www.linkedin.com/in/jakub-kor%C5%BC/"
        >
          <AiFillLinkedin />
        </Button>

        <Button
          variant="contact"
          icon={false}
          href="https://twitter.com/403hpns"
        >
          <AiFillTwitterCircle />
        </Button>

        <Button
          variant="contact"
          icon={false}
          href="https://discord.gg/54aafTquym"
        >
          <BsDiscord />
        </Button>
      </div>

      <ContactForm />
    </motion.section>
  );
};

export default Contact;
