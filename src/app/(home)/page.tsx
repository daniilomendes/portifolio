import CardSlider from "@/components/ui/CertificatesCarrousel";
import IntroductionArea from "@/components/ui/introduction-area";
import ProjectList from "@/components/ui/project-list";
import SectionTitle from "@/components/ui/section-title";

const Home = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 py-8 lg:container lg:gap-10">
      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionTitle className="pl-5">Sobre mim</SectionTitle>
        <IntroductionArea />
      </div>

      {/* <div className="flex flex-col gap-3 md:hidden lg:gap-5">
        <SectionTitle className="pl-5">Certificados</SectionTitle>
        <CardSlider />
      </div> */}

      <div>
        <SectionTitle className="mb-1 md:mb-8 pl-5 pb-5">Projetos</SectionTitle>
        <ProjectList />
      </div>
    </div>
  );
};

export default Home;
