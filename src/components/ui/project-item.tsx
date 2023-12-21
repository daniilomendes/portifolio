import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectItemsProps {
  certificate: string;
  className?: string;
}

const ProjectItem = ({
  certificate,
  className,
}: ProjectItemsProps) => {
  return (
    <Link
      href="https://drive.google.com/file/d/17iGmi3w8nu2haEXt1Th3ndvfrTdB5x7z/view?usp=drive_link"
      className={cn("flex min-w-[156px] flex-col gap-4", className)}
    >
      <div className="relative flex aspect-square w-full items-center justify-center rounded-lg">
        <Image
          src={certificate}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[100%] object-contain"
          alt="Alou"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="truncate text-sm">Nome do certificado</p>

        <div className="flex items-center gap-2 ">
          <p className="truncate text-sm font-semibold">Categoria Front-end</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
