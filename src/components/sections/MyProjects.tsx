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
        workTime={"1 month"}
        liveButtonHref="#"
        repositoryButtonHref="https://github.com/403hpns/portfolio-website"
      />
      <ProjectCard
        title="TeleMagic.pl"
        description="Commercial single page application made for Polish GSM company. The project has been written in Next.js, React, TypeScript, TailwindCSS."
        position="right"
        status={ProjectStatus.done}
        workTime="5 months"
        liveButtonHref="https://www.telemagic.pl/"
      />
      <ProjectCard
        title="e-Bank"
        description="A fictional online banking website. It includes a homepage that describes the benefits of opening an account with the bank, a functional dashboard where you can open a new bank account, create a new card, apply for a loan, or make a money transfer to another account. Used technologies: React, TypeScript, Next.js, TailwindCSS."
        status={ProjectStatus.done}
        workTime={"4 months"}
        liveButtonHref="https://403hpns.dev/projects/ebank"
        repositoryButtonHref="https://github.com/403hpns/ebank-app"
      />
      <ProjectCard
        title="GTA World"
        description="One of the largest projects on RAGE:MP. I was responsible for implementing and reworking game UIs (React, TS, ChakraUI) and their backend (C#)."
        position="right"
        status={ProjectStatus.done}
        workTime="above 1 year"
        liveButtonHref="https://gta.world/"
      />
      <ProjectCard
        title="Social RolePlay"
        description="Multiplayer role-playing game built using a variety of technologies, including front-end (CEF) in React, back-end in C# and client-side in TypeScript."
        status={ProjectStatus.inprogress}
      />
      <ProjectCard
        title="GitHub Searcher"
        description="GitHub searcher is an application that allows you to search users and repositories on GitHub. Stack I used for this project: HTML5, CSS3, TypeScript, axios."
        position="right"
        status={ProjectStatus.done}
        workTime={"2 days"}
        liveButtonHref="https://403hpns.github.io/github-searcher/"
        repositoryButtonHref="https://github.com/403hpns/github-searcher"
      />
    </section>
  );
};

export default MyProjects;
