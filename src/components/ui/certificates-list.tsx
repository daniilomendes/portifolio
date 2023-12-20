import CertificatesItem from "./certificates-item";



const CertificatesList = () => { 
    const imagesCertificates: Array<string> = ["/Banco-de-Dados-SQL-NodeJS.png", "/imgGit.png"]
    const namesCertificates: Array<string> = [""]
    const categoryCertificates: Array<string> = [""]
    const linksCertificates: Array<string> = [""]


  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {imagesCertificates.map((cert) =>
            <CertificatesItem certificate={cert} className="w-[156px] lg:w-[200px] lg:min-w-[200px]" />
        )}
    </div>
  );
};

export default CertificatesList;
