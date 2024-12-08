interface AboutQuestionsProps {
  question: string;
  anwser: string | number;
}

const AboutQuestions = ({ question, anwser }: AboutQuestionsProps) => {
  return (
    <div className="p-2 flex flex-col">
      <p className="uppercase text-2xl text-primary font-semibold">
        {question}
      </p>
      <p className="text-xl text-justify">{anwser}</p>
    </div>
  );
};

export default AboutQuestions;
