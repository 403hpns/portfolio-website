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

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  position = "left",
  status,
  workTime,
}) => {
  return (
    <div
      className={`${
        position === "left"
          ? "self-start"
          : position === "right"
          ? "self-end"
          : null
      } relative before:absolute before:top-[-15px] before:right-[15px] before:w-[100px] before:h-[2px] before:bg-[#6C63FF] after:absolute after:bottom-[-15px] after:left-[15px] after:w-[250px] after:h-[2px] after:bg-[#6C63FF] flex gap-4 w-1/2 p-4  border-2 border-[#6C63FF] rounded bg-zinc-900/90`}
    >
      <Image
        src={image}
        alt="Website preview"
        width={200}
        height={200}
        className="min-w-[200px] border border-[#333]"
        unoptimized={true}
      />

      <div className="p-2 flex flex-col gap-2">
        <p className="leading-none uppercase font-semibold text-xl text-[#6C63FF]">
          {title}{" "}
          <span className="font-normal text-base normal-case block text-white">
            &#40;
            {status === ProjectStatus.done
              ? "Done"
              : status === ProjectStatus.inprogress
              ? "In-progress"
              : null}
            {workTime && `, ${workTime}`}&#41;
          </span>
        </p>
        <span className="w-full h-px bg-[#6C63FF]" />
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
