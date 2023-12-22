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

const ProjectItem = ({ project, className }: ProjectItemsProps) => {
  return (
    <Link
      href={project.link}
      className={cn("flex min-w-[156px] flex-col", className)}
    >
      <div className="relative flex  w-full items-center justify-center rounded-lg lg:aspect-auto">
        <Image
          src={project.image}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[100%] w-auto max-w-[100%] object-contain"
          alt={project.name}
        />
      </div>

      <div className="mt-5 flex flex-col gap-1">
        <p className="truncate text-sm">Projeto Full-Stack</p>

        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-semibold">{project.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
