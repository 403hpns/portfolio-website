import Image, { StaticImageData } from "next/image";

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
}

const ProjectCard2: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  position = "left",
  status,
  workTime,
}) => {
  return (
    <div className="flex w-full rounded border-2 border-primary bg-zinc-900/80">
      <div className="w-[40%] min-h-full">
        <Image src={image} alt="" className="h-full object-cover" unoptimized />
      </div>
      <div className="w-[60%] p-4 flex flex-col gap-2">
        <h2 className="text-xl text-primary font-bold leading-none ">
          {title}{" "}
          <p className="text-base text-white normal-case">
            &#40;{status === ProjectStatus.done ? "Done" : "In-Progress"}
            {status === ProjectStatus.done && <>, {workTime} of work</>}&#41;
          </p>
        </h2>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard2;
