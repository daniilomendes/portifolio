import { Button } from "@/components/ui/button";
import CertificatesList from "@/components/ui/certificates-list";
import SectionTitle from "@/components/ui/section-title";
import Link from "next/link";

const Home = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 py-8 lg:container lg:gap-10">
      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionTitle className="pl-5">Certificados</SectionTitle>
        <CertificatesList />
      </div>

    </div>
  );
};

export default Home;
