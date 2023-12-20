import CertificatesItem from "@/components/ui/certificates-item";

const CertificatesPage = () => {
  const imagesCertificates: Array<string> = [
    "/Banco-de-Dados-SQL-NodeJS.png",
    "/imgGit.png",
    "/Banco-de-Dados-SQL-NodeJS.png",
    "/imgGit.png",
  ];
  const namesCertificates: Array<string> = [""];
  const categoryCertificates: Array<string> = [""];
  const linksCertificates: Array<string> = [""];

  return (
    <div>
      <div className="mx-auto flex flex-col gap-8 p-5 lg:container lg:gap-10 lg:py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          {imagesCertificates.map((cert) => (
            <CertificatesItem certificate={cert} className="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
