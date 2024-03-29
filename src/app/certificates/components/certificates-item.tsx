import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Certificate {
  imageUrl: string;
  name: string;
  link: string;
}

interface CertificatesItemsProps {
  certificate: Certificate;
  className?: string;
}

const CertificatesItem = ({
  certificate,
  className,
}: CertificatesItemsProps) => {
  return (
    <Link
      href={certificate.link}
      className={cn("flex  flex-col gap-1", className)}
      target="_blank"
    >
      <div className="relative flex min-w-[150px] md:min-w-[180px] aspect-square w-full items-center justify-center rounded-lg">
        <Image
          src={certificate.imageUrl}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[100%] object-contain"
          alt={certificate.name}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 ">
          <p className="truncate text-sm font-semibold">{certificate.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CertificatesItem;
