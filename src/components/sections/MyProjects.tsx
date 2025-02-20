'use client';

const stack = {
  ts: { id: 'ts', name: 'TypeScript' },
  js: { id: 'js', name: 'JavaScript' },
  next: { id: 'next', name: 'Next.js' },
  react: { id: 'react', name: 'React' },
  nuxt: { id: 'nuxt', name: 'Nuxt' },
  vue: { id: 'vue', name: 'Vue' },
  nest: { id: 'nest', name: 'NestJS' },
  java: { id: 'java', name: 'Java' },
  cs: { id: 'cs', name: 'C#' },
  net: { id: 'net', name: '.NET' },
  html: { id: 'html', name: 'HTML' },
  css: { id: 'css', name: 'CSS' },
  tailwindcss: { id: 'tailwindcss', name: 'TailwindCSS' },
  chakra: { id: 'chakra', name: 'Chakra UI' },
};

import ProjectCard, { ProjectStatus } from '../ProjectCard';

const MyProjects = () => {
  return (
    <section id="projects" className="flex flex-col items-center">
      <h2 className="mb-10 uppercase text-8xl text-center">
        My <p className="text-3xl font-semibold text-primary">projects.</p>
      </h2>
      <ProjectCard
        title="My portfolio"
        description="This is my personal portfolio website, which you are currently visiting."
        technologies={[stack.next, stack.react, stack.ts, stack.tailwindcss]}
        status={ProjectStatus.done}
        workTime={'1 month'}
        liveButtonHref="#"
        repositoryButtonHref="https://github.com/403hpns/portfolio-website"
      />
      <ProjectCard
        title="TeleMagic.pl"
        description="A commercial landing page created for a Polish GSM company."
        technologies={[stack.next, stack.react, stack.ts, stack.tailwindcss]}
        position="right"
        status={ProjectStatus.done}
        workTime="5 months"
        liveButtonHref="https://telemagic.pl/"
      />
      <ProjectCard
        title="UNO Online"
        description="UNO Online is a real-time multiplayer implementation of the classic card game UNO, built with modern web technologies. This project allows players to create lobbies, invite friends, and play together. "
        position="left"
        technologies={[stack.nuxt, stack.vue, stack.nest, stack.tailwindcss]}
        status={ProjectStatus.done}
        workTime="5 months"
        liveButtonHref="https://403hpns.dev/projects/uno/"
        repositoryButtonHref="https://github.com/403hpns/uno-online"
      />
      <ProjectCard
        title="TRPG Assistant"
        description="A PWA application for managing TRPG sessions. It allows the creation of campaigns and sessions, offering tools such as character and item generators, as well as control over the stats of heroes and enemies."
        technologies={[stack.react, stack.ts, stack.tailwindcss]}
        position="right"
        status={ProjectStatus.inprogress}
        repositoryButtonHref="https://github.com/403hpns/rpg-assistant"
      />
      <ProjectCard
        title="Social Role Play"
        description="Multiplayer role-playing game. I'm responsible for implementing the system architecture, managing the software development process, code review, and supporting the team."
        technologies={[
          stack.nuxt,
          stack.vue,
          stack.nest,
          stack.ts,
          stack.tailwindcss,
        ]}
        status={ProjectStatus.inprogress}
        position="left"
      />
      <ProjectCard
        title="GTA World"
        description="International multiplayer role-playing project based on RAGE:MP platform. I was responsible for implementing and reworking game UIs and game systems in backend."
        technologies={[
          stack.cs,
          stack.net,
          stack.react,
          stack.ts,
          stack.chakra,
        ]}
        status={ProjectStatus.done}
        workTime="above 2 years"
        liveButtonHref="https://gta.world/"
        position="right"
      />

      <ProjectCard
        title="MC DiscordAuth"
        description="An authentication plugin for Minecraft written in Java that blocks all basic in-game operations when a player joins the server. The plugin then sends a notification to Discord via a webhook with connection details. If the connection is accepted, player is allowed to join; if not, it is kicked from the server."
        technologies={[stack.java]}
        position="left"
        status={ProjectStatus.done}
        workTime="1 day"
      />
      <ProjectCard
        title="e-Bank"
        description="A fictional online banking website. It includes a homepage that describes the benefits of opening an account with the bank, and a functional dashboard where you can open a new bank account, create a new card, apply for a loan, or make a money transfer to another account."
        technologies={[stack.next, stack.react, stack.ts, stack.tailwindcss]}
        status={ProjectStatus.done}
        workTime={'4 months'}
        repositoryButtonHref="https://github.com/403hpns/ebank-app"
        position="right"
      />
      <ProjectCard
        title="GitHub Searcher"
        description="GitHub searcher is an application that allows you to search users and repositories on GitHub."
        technologies={[stack.html, stack.css, stack.js]}
        status={ProjectStatus.done}
        workTime={'2 days'}
        liveButtonHref="https://403hpns.github.io/github-searcher/"
        repositoryButtonHref="https://github.com/403hpns/github-searcher"
      />
    </section>
  );
};

export default MyProjects;
