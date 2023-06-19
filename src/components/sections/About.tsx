import Image from "next/image";
import AboutQuestions from "../AboutQuestions";
import aboutImage from "@/assets/hello.svg";
import Link from "next/link";
import Accordion from "../Accordion";

const questions = [
  { question: "name", anwser: "Kuba" },
  { question: "age", anwser: 23 },
  { question: "location", anwser: "Poland, Poznań" },
  {
    question: "favorite games",
    anwser:
      "Gothic I - III, Euro Truck Simulator 2, Heroes of Might & Magic III, Grand Theft Auto series, Ready or Not, Minecraft, Among Us.",
  },
  { question: "humor level", anwser: '["hip", "hip"] (hip hip array!)' },
  {
    question: "interests",
    anwser:
      "Programming (no shit sherlock), game dev, video games, psychology, reading books, extreme sports (like extreme sitting 24 hours at the computer)",
  },
];

const About = () => {
  return (
    <section id="about" className="flex justify-between">
      <Image src={aboutImage} alt="" className="hidden" />

      <div className="flex flex-col items-center gap-8 w-full p-6 border-2 rounded-tl-[50px] rounded-br-[50px] border-primary bg-zinc-900/80">
        {/* Heading */}
        <div className="flex px-8 py-4">
          <h2 className="uppercase font-semibold text-5xl">
            About{" "}
            <p className="text-primary text-8xl text-center font-bold ">me.</p>
          </h2>
        </div>

        {/* Content */}
        <div className="flex justify-between flex-wrap gap-8 w-full">
          {questions.map((item) => {
            return (
              <AboutQuestions
                key={item.question}
                question={item.question}
                anwser={item.anwser}
              />
            );
          })}
        </div>

        {/* Career */}
        <div className="p-2  w-full">
          <p className="uppercase text-2xl text-primary font-semibold">
            My career
          </p>
          <ul>
            <li className="text-justify text-xl">
              - Ancad Studios as Full-stack Developer (12.06.2023 - 12.06.2023)
              - creating user interfaces for RolePlay server in Grand Theft
              Auto: V on{" "}
              <Link
                href="https://rage.mp/"
                target="_blank"
                className="font-semibold cursor-pointer hover:text-[#6C63FF]"
              >
                RAGE Multiplayer modification.{" "}
              </Link>
              React, JavaScript, Chakra UI were used on front-end and C# for
              back-end.
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-2 w-full">
          <p className="uppercase text-center text-2xl text-primary font-semibold">
            Questions?
          </p>

          <Accordion
            header="What technology stack are you familiar with?"
            body="HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Redux, SASS (SCSS), CSS Modules, Styled Components, TailwindCSS, ChakraUI, Vite, Webpack, Docker, Git, LUA"
          />
          <Accordion
            header="What is your daily routine as a developer?"
            body="My daily routine as a programmer involves setting new goals for myself. These goals primarily revolve around learning new things - every day, I strive to discover something new, enhance my programming skills, and acquire new knowledge about technologies. Usually, I start my day with a good cup of coffee and reading articles, watching videos on technology, and generally staying updated on the world of IT.

                    However, technology is not the only important aspect. I also dedicate a lot of time to personal development, reading books (mostly about psychology), and engaging in physical exercises."
          />
          <Accordion
            header="What are you going to do in the future?"
            body="1"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
