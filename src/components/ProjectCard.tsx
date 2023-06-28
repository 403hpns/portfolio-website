import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Button from "./ui/Button";

import { motion, useAnimation, useInView } from "framer-motion";

export enum ProjectStatus {
  done,
  inprogress,
}

interface ProjectCardProps {
  title: string;
  description: string;
  position?: string;
  status: ProjectStatus;
  workTime?: string | number;
  liveButtonHref?: string;
  repositoryButtonHref?: string;
}

const variants = {
  hiddenPosition: (pos: string) =>
    pos === "left" ? { x: "-100%" } : { x: "100%" },
  visiblePosition: { x: "0%" },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  position = "left",
  status,
  workTime,
  liveButtonHref,
  repositoryButtonHref,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visiblePosition");
    } else {
      controls.start("hiddenPosition");
    }
  }, [controls, inView]);
  return (
    <motion.div
      variants={variants}
      custom={position}
      animate={controls}
      transition={{ duration: 0.2 }}
      ref={ref}
      exit={"exitPosition"}
      className={`${
        position === "left" ? "self-start" : "self-end"
      } w-full p-6 my-5 lg:my-0 lg:w-1/2 rounded border-2 border-primary bg-zinc-900/80 origin-top subpixel-antialiased`}
    >
      <div className="w-full p-4 flex flex-col gap-2">
        <h2 className="text-3xl text-primary font-bold leading-none ">
          {title}{" "}
          <p className="text-base text-white normal-case font-normal">
            &#40;{status === ProjectStatus.done ? "Done" : "In-Progress"}
            {status === ProjectStatus.done && <>, {workTime} of work</>}&#41;
          </p>
        </h2>
        <p className="text-justify">{description}</p>

        <Button disabled={!liveButtonHref} href={liveButtonHref}>
          See live demo
        </Button>
        <Button disabled={!repositoryButtonHref} href={repositoryButtonHref}>
          Check GitHub repository
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
