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

const Contact = () => {
  return (
    <section
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
          href="https://discord.gg/54aafTquym"
        >
          <BsDiscord />
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
          href="https://twitter.com/403hpns"
        >
          <AiFillTwitterCircle />
        </Button>

        <Button
          variant="contact"
          icon={false}
          href="https://www.linkedin.com/in/jakub-kor%C5%BC/"
        >
          <AiFillLinkedin />
        </Button>
      </div>

      <form className="hidden form flex flex-col justify-center items-center gap-4 w-full p-4 rounded border-2 border-primary bg-zinc-900/90">
        Feel free to send me a message.
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
    </section>
  );
};

export default Contact;
