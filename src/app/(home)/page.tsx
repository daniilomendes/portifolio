import CertificatesList from "@/components/ui/certificates-list";
import IntroductionArea from "@/components/ui/introduction-area";
import ProjectList from "@/components/ui/project-list";
import SectionTitle from "@/components/ui/section-title";

const Home = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 py-8 lg:container lg:gap-10">
      {/* Texto de introdução */}
      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionTitle className="pl-5">Sobre mim</SectionTitle>
        <IntroductionArea />
      </div>

      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionTitle className="pl-5">Certificados</SectionTitle>
        <CertificatesList />
      </div>

      <div>
        <SectionTitle className="pl-5 mb-8 lg:mb-1">Projetos</SectionTitle>
        <ProjectList />
      </div>
    </div>
  );
};

export default Home;
