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
        description="This is my personal portfolio website, which you are currently visiting. I used technologies such as React, TypeScript, Next.js, and TailwindCSS. The biggest challenge was the overflow of ideas, as each new one drastically changed the entire site, leading to increased development time. In the end, I opted for a simpler approach."
        status={ProjectStatus.done}
        workTime={"1 month"}
        liveButtonHref="#"
        repositoryButtonHref="https://github.com/403hpns/portfolio-website"
      />
      <ProjectCard
        title="TeleMagic.pl"
        description="A commercial single-page application created for a Polish GSM company. The project was developed using Next.js, React, TypeScript, and TailwindCSS."
        position="right"
        status={ProjectStatus.done}
        workTime="5 months"
        liveButtonHref="https://telemagic.pl/"
      />
      <ProjectCard
        title="TRPG Assistant"
        description="A PWA application for managing TRPG sessions. It allows the creation of campaigns and sessions, offering tools such as character and item generators, as well as control over the stats of heroes and enemies."
        position="left"
        status={ProjectStatus.inprogress}
      />
      <ProjectCard
        title="Social Role Play"
        description="Multiplayer role-playing game. I'm responsible for implementing the system architecture, managing the software development process, code review, and supporting the team."
        status={ProjectStatus.inprogress}
        position="right"
      />
      <ProjectCard
        title="GTA World"
        description="International multiplayer role-playing project based on RAGE:MP platform. I was responsible for implementing and reworking game UIs (React, TS, ChakraUI) and their backend (C#)."
        status={ProjectStatus.done}
        workTime="above 2 years"
        liveButtonHref="https://gta.world/"
      />

      <ProjectCard
        title="MC DiscordAuth"
        description="An authentication plugin for Minecraft written in Java that blocks all basic in-game operations when a player joins the server. The plugin then sends a notification to Discord via a webhook with connection details. If the connection is accepted, player is allowed to join; if not, it is kicked from the server."
        position="right"
        status={ProjectStatus.done}
        workTime="1 day"
      />
      <ProjectCard
        title="e-Bank"
        description="A fictional online banking website. It includes a homepage that describes the benefits of opening an account with the bank, and a functional dashboard where you can open a new bank account, create a new card, apply for a loan, or make a money transfer to another account. Technologies used: React, TypeScript, Next.js, TailwindCSS."
        status={ProjectStatus.done}
        workTime={"4 months"}
        liveButtonHref="https://403hpns.dev/projects/ebank"
        repositoryButtonHref="https://github.com/403hpns/ebank-app"
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
