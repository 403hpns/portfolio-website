import { ProjectStatus } from "../ProjectCard";

import ProjectCard2 from "../ProjectCard2";
import ProjectCard from "../ProjectCard";

import portfolioImg from "@/assets/portfoliopage.png";

const MyProjects = () => {
  return (
    <section id="projects" className="flex flex-col gap-10">
      <h2 className="uppercase text-8xl text-center">
        My <p className="text-3xl font-semibold text-primary">projects.</p>
      </h2>

      <ProjectCard2
        image={portfolioImg}
        title="My portfolio"
        description="My own portfolio website, which you are currently on. I used technologies like: React, TypeScript, Next.js, TailwindCSS. The biggest challenge was the overflow of ideas, as each new one drastically changed the entire site, resulting in increased development time. In the end, I opted for something simple."
        status={ProjectStatus.done}
        workTime={"1 week"}
      />
      <ProjectCard2
        image={portfolioImg}
        title="e-Bank"
        description="A fictional online banking website. It includes a homepage that describes the benefits of opening an account with the bank, a functional dashboard where you can open a new bank account, create a new card, apply for a loan, or make a money transfer to another account. Used technologies: React, TypeScript, Next.js, TailwindCSS."
        status={ProjectStatus.inprogress}
        workTime={"1 week"}
      />
      <ProjectCard2
        image={portfolioImg}
        title="Shizuka no Sakura"
        description="Browser game. More info coming soon."
        status={ProjectStatus.inprogress}
        workTime={"1 week"}
      />
    </section>
  );
};

export default MyProjects;
