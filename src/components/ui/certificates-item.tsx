import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CertificatesItemsProps {
  certificate: string;
  className?: string;
}

const CertificatesItem = ({certificate, className}: CertificatesItemsProps) => {
  return (
    <Link href="https://drive.google.com/file/d/17iGmi3w8nu2haEXt1Th3ndvfrTdB5x7z/view?usp=drive_link"
    className={cn("flex min-w-[156px] flex-col gap-4", className)}
    >
      <Image
        src={certificate}
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        alt="Alou"
      />

      <div className="flex flex-col gap-1">
        <p className="truncate text-sm">Nome do certificado</p>

        <div className="flex items-center gap-2 ">
            <p className="truncate text-sm font-semibold">
              Categoria Front-end
            </p>
          
        </div>
      </div>
    </Link>
  );
};

export default CertificatesItem;
