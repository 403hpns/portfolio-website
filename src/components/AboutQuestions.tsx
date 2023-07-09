const AboutQuestions = ({
  question,
  anwser,
}: {
  question: string;
  anwser: string | number;
}) => {
  return (
    <div className="p-2 flex flex-col">
      <p className="uppercase text-2xl font-semibold text-primary">
        {question}
      </p>
      <p className="text-xl text-justify">{anwser}</p>
    </div>
  );
};

export default AboutQuestions;
