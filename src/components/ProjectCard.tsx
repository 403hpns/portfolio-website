import Image, { StaticImageData } from "next/image";
import Button from "./ui/Button";

export enum ProjectStatus {
  done,
  inprogress,
}

interface ProjectCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  position?: string;
  status: ProjectStatus;
  workTime?: string | number;
  liveButtonHref?: string;
  repositoryButtonHref?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  position = "left",
  status,
  workTime,
  liveButtonHref,
  repositoryButtonHref,
}) => {
  return (
    <div
      className={`${
        position === "left" ? "self-start" : "self-end"
      } w-full my-5 lg:my-0 lg:w-1/2 rounded border-2 border-primary bg-zinc-900/80`}
    >
      <div className="min-h-full">
        <Image
          src={image}
          alt=""
          className="hidden h-full object-cover"
          unoptimized
        />
      </div>
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
    </div>
  );
};

export default ProjectCard;
