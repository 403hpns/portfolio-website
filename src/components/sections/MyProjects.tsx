import { ProjectStatus } from "../ProjectCard";

import ProjectCard2 from "../ProjectCard2";
import ProjectCard from "../ProjectCard";

import portfolioImg from "@/assets/portfoliopage.png";

const MyProjects = () => {
  return (
    <section id="projects" className="flex flex-col sm:gap-6">
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
        description="Website for bank."
        status={ProjectStatus.inprogress}
        workTime={"1 week"}
      />
      <ProjectCard2
        image={portfolioImg}
        title="Shizuka no Sakura"
        description="Browser game."
        status={ProjectStatus.inprogress}
        workTime={"1 week"}
      />
    </section>
  );
};

export default MyProjects;
