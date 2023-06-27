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

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, top: -100 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 1 }}
      id="contact"
      className="flex flex-col justify-center items-center gap-10 p-4 "
    >
      <h2 className="uppercase text-6xl font-semibold">
        Get in <p className="text-primary">touch.</p>
      </h2>

      <div className="flex justify-center items-center flex-wrap w-full">
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

      <form className="hidden form flex-col justify-center items-center gap-4 w-full lg:w-1/2 p-4 rounded border-2 border-primary bg-zinc-900/90 animate-show-ui">
        <p className="p-2 text-center">Feel free to send me a message.</p>
        <Input name="mail" label="E-mail" />
        <Input name="subject" label="Subject" />
        <div className="min-w-full">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className="my-2 p-2 min-h-[100px] w-full outline-none border-none resize-none bg-zinc-800"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button type="submit">Submit</Button>
          <Button type="reset">Clear</Button>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
