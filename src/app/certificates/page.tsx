import { Badge } from "@/components/ui/badge";
import CertificatesList from "@/components/ui/certificates-list";


const CertificatesPage = () => {

  return (
    <>
        <div className="flex flex-col gap-8 p-5 mx-auto lg:container lg:gap-10 lg:py-10">
            <Badge variant="heading">
                Certificados
            </Badge>
        </div>

        <CertificatesList />
        </>
  );
};

export default CertificatesPage;
