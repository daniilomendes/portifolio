import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  image: string;
  name: string;
  link: string;
}

interface ProjectItemsProps {
  project: Project;
  className?: string;
}

const ProjectItem = ({
  project,
  className,
}: ProjectItemsProps) => {
  return (
    <Link
      href={project.link}
      className={cn("flex min-w-[156px] flex-col gap-4", className)}
    >
      <div className="relative flex aspect-square w-full items-center justify-center rounded-lg">
        <Image
          src={project.image}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[100%] object-contain"
          alt="Alou"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="truncate text-sm">{project.name}</p>

        <div className="flex items-center gap-2 ">
          <p className="truncate text-sm font-semibold">Categoria Front-end</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
