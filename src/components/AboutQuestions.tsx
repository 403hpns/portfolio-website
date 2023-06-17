const AboutQuestions = ({
  question,
  anwser,
}: {
  question: string;
  anwser: string | number;
}) => {
  return (
    <div className="p-2 flex flex-col">
      <p className="uppercase text-2xl text-primary font-semibold">
        {question}
      </p>
      <p className="text-xl">{anwser}</p>
    </div>
  );
};

export default AboutQuestions;
