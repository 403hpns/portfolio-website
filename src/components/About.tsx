import Image from "next/image";
import AboutQuestions from "./AboutQuestions";
import aboutImage from "../assets/hello.svg";

const questions = [
  { question: "name", anwser: "Kuba" },
  { question: "age", anwser: 23 },
  { question: "location", anwser: "Poland, Poznań" },
  {
    question: "favorite games",
    anwser:
      "Gothic I - III, Euro Truck Simulator 2, Grand Theft Auto series, Ready or Not, Minecraft, Among Us",
  },
  { question: "humor level", anwser: '["hip", "hip"] (hip hip array!)' },
  { question: "interesests", anwser: "Video games" },
];

const About = () => {
  return (
    <section className="flex justify-between">
      <Image src={aboutImage} alt="" className="hidden" />

      <div className="flex flex-col items-center gap-8 w-full p-4 border-2 rounded-tl-[50px] rounded-br-[50px] border-primary bg-zinc-900/80">
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

          {/* Career */}
          <div>
            <p>Career</p>
          </div>

          {/* FAQ */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
