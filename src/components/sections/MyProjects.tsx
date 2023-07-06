"use client";

import ProjectCard from "../ProjectCard";
import { ProjectStatus } from "../ProjectCard";

const MyProjects = () => {
  return (
    <section id="projects" className="flex flex-col items-center">
      <h2 className="mb-10 uppercase text-8xl text-center">
        My <p className="text-3xl font-semibold text-primary">projects.</p>
      </h2>
      <ProjectCard
        title="My portfolio"
        description="My own portfolio website, which you are currently on. I used technologies like: React, TypeScript, Next.js, TailwindCSS. The biggest challenge was the overflow of ideas, as each new one drastically changed the entire site, resulting in increased development time. In the end, I opted for something simple."
        status={ProjectStatus.done}
        workTime={"1 week"}
        liveButtonHref="#"
        repositoryButtonHref="https://github.com/403hpns/portfolio-website"
      />

      <ProjectCard
        title="GitHub Searcher"
        description="GitHub searcher is an application that allows you search users and repositories on GitHub. Stack I used for this project: HTML5, CSS3, TypeScript, axios."
        position="right"
        status={ProjectStatus.done}
        workTime={"2 days"}
        liveButtonHref="x"
        repositoryButtonHref="https://github.com/403hpns/github-searcher"
      />
      <ProjectCard
        title="e-Bank"
        description="A fictional online banking website. It includes a homepage that describes the benefits of opening an account with the bank, a functional dashboard where you can open a new bank account, create a new card, apply for a loan, or make a money transfer to another account. Used technologies: React, TypeScript, Next.js, TailwindCSS."
        status={ProjectStatus.inprogress}
        workTime={"1 week"}
        repositoryButtonHref="https://github.com/403hpns/ebank-app"
      />
      <ProjectCard
        title="Shizuka no Sakura"
        description="Browser game. More info coming soon."
        status={ProjectStatus.inprogress}
        workTime={"1 week"}
        repositoryButtonHref="https://github.com/Playrole-Games/shizuka-no-sakura"
        position="right"
      />
    </section>
  );
};

export default MyProjects;
