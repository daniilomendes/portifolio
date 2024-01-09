"use client";

import { Slider, SliderProps, Slide } from "../../lib/index";
import CertificatesItem from "./certificates-item";

interface CertificateSliderProps {}

interface Certificate {
  image: string;
  name: string;
  link: string;
}

interface CertificatesItemsProps {
  certificate: Certificate;
  className?: string;
}

interface Certificate {
  id: number;
  image: string;
  name: string;
  link: string;
}

const CardSlider = () => {
  let certificate1 = {
    id: 1,
    image:
      "/certificates-images/Programador-Full-Stack-JavaScript-Profissional.png",
    name: "Programador Full Stack JavaScript Profissional",
    link: "https://drive.google.com/file/d/1r6VVoSt35_hZWfmawnjqjGg5y_LdvnVG/view?usp=sharing",
  };
  let certificate2 = {
    id: 2,
    image: "/certificates-images/TypeScript.png",
    name: "TypeScript",
    link: "https://drive.google.com/file/d/16rkUEnI4BrT7jk7KZUMgIdE0bvDAXCH3/view?usp=sharing",
  };
  let certificate3 = {
    id: 3,
    image: "/certificates-images/Formação-Front-end.jpg",
    name: "Formação Front-End",
    link: "https://drive.google.com/file/d/114wi9y3y3SEKBVeqXTUyUK-z4fPVklRM/view?usp=sharing",
  };
  let certificate4 = {
    id: 4,
    image: "/certificates-images/Dominando-NodeJs.png",
    name: "Dominando o NodeJs",
    link: "https://drive.google.com/file/d/18-bvI89r8Dc5Vk5CR-JnMgRLWAWUZP8-/view?usp=sharing",
  };
  let certificate5 = {
    id: 5,
    image: "/certificates-images/NextJS.png",
    name: "NextJS",
    link: "https://drive.google.com/file/d/134CI-NtTWm38jbPToZkFX04152c31AeZ/view?usp=sharing",
  };
  let certificate6 = {
    id: 6,
    image: "/certificates-images/Fundamentos-React.png",
    name: "Fundamentos do React",
    link: "https://drive.google.com/file/d/16wWCqRVhJcEUNUpBqGJ1EeaR2FCpgUw0/view?usp=sharing",
  };
  let certificate7 = {
    id: 7,
    image: "/certificates-images/Gestão-Ágil-Scrum.jpg",
    name: "Gestão Ágil com Scrum",
    link: "https://drive.google.com/file/d/19_wxJFapZDJ10Urn_PvfcP1n7pcnBYvD/view?usp=sharing",
  };
  let certificate8 = {
    id: 8,
    image: "/certificates-images/Banco-de-Dados-SQL-NodeJS.png",
    name: "Banco de Dados SQL NodeJS",
    link: "https://drive.google.com/file/d/1vCFbwz0vzFdxhlZSnDpOgeLgyS7O5ZXz/view?usp=sharing",
  };
  let certificate9 = {
    id: 9,
    image: "/certificates-images/JavaScript.png",
    name: "JavaScript",
    link: "https://drive.google.com/file/d/1KO4_DvmG3S4VMfmGaO9ldXHQ6WwA93tm/view?usp=sharing",
  };
  let certificate10 = {
    id: 10,
    image: "/certificates-images/MongoDB.png",
    name: "MongoDB",
    link: "https://drive.google.com/file/d/1TLW5B5NYWunmITzrZ6IdZBsyOSgow71o/view?usp=sharing",
  };
  let certificate11 = {
    id: 11,
    image: "/certificates-images/C-Completo-POO.png",
    name: "C# Completo e Programação Orientada a Objetos",
    link: "https://drive.google.com/file/d/1CQViZxzXNhEnmETj4mA3O2cs_TwXSZT7/view?usp=sharing",
  };
  let certificate12 = {
    id: 12,
    image: "/certificates-images/Programação-Python-básico-avançado.jpg",
    name: "Programação Python do Básico ao Avançado",
    link: "https://drive.google.com/file/d/1ioQ5hEr_S6yuMhXYApsNdeWoV7xsKIGv/view?usp=sharing",
  };
  let certificate13 = {
    id: 13,
    image: "/certificates-images/Formação-Cientista-Dados.jpg",
    name: "Formação Cientista de Dados com Python e R",
    link: "https://drive.google.com/file/d/1zfrUVqSSKaWXD7srmObd5uoQuPrZ3f_5/view?usp=sharing",
  };
  let certificate14 = {
    id: 14,
    image: "/certificates-images/Planejamento-e-Gestão-Projetos.jpg",
    name: "Planejamento e Gestão Projetos",
    link: "https://drive.google.com/file/d/1miaLpUoZ_NgmHksuQtxLkMsL4EI4hk3L/view?usp=sharing",
  };
  let certificate15 = {
    id: 15,
    image: "/certificates-images/Sass.png",
    name: "Sass",
    link: "https://drive.google.com/file/d/1vdBGEil8pHjTRFl-_l6oWWQzcLirCJMu/view?usp=sharing",
  };
  let certificate16 = {
    id: 16,
    image: "/certificates-images/HTML5.png",
    name: "HTML5",
    link: "https://drive.google.com/file/d/1x-7avivdn9oRax08-VJFjd-1-rD2Gawm/view?usp=sharing",
  };
  let certificate17 = {
    id: 17,
    image: "/certificates-images/Git-GitHub.png",
    name: "Git e GitHub",
    link: "https://drive.google.com/file/d/1hwZe4kGN0bqmaakHgLJDq9CRO_DmdF7A/view?usp=sharing",
  };
  let certificate18 = {
    id: 18,
    image: "/certificates-images/Bootstrap.png",
    name: "Bootstrap",
    link: "https://drive.google.com/file/d/17iGmi3w8nu2haEXt1Th3ndvfrTdB5x7z/view?usp=sharing",
  };
  let certificate19 = {
    id: 19,
    image: "/certificates-images/CSS-Moderno.png",
    name: "CSS Moderno",
    link: "https://drive.google.com/file/d/16JbNMZ_B3iyaIUSKobzyJFPVQqwWRkMC/view?usp=sharing",
  };
  let certificate20 = {
    id: 20,
    image: "/certificates-images/CSS3.png",
    name: "CSS3",
    link: "https://drive.google.com/file/d/1s5V45Li2RnK7-7aL9sxs19P2C_oUITUd/view?usp=sharing",
  };
  let certificate21 = {
    id: 21,
    image: "/certificates-images/Bulma.png",
    name: "Bulma",
    link: "https://drive.google.com/file/d/1uw9X2soUCd4-mMUkYKZ4VG7bBzUVXCOO/view?usp=sharing",
  };
  let certificate22 = {
    id: 22,
    image: "/certificates-images/KanBan-Guia-Completo.jpg",
    name: "KanBan: O Guia Completo",
    link: "https://drive.google.com/file/d/1gVpCwcnNf9xn4NMlnljFxuBfSvc7xknk/view?usp=sharing",
  };

  const certificates: Certificate[] = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
    certificate6,
    certificate7,
    certificate8,
    certificate9,
    certificate10,
    certificate11,
    certificate12,
    certificate13,
    certificate14,
    certificate15,
    certificate16,
    certificate17,
    certificate18,
    certificate19,
    certificate20,
    certificate21,
    certificate22,
  ];

  const settings: SliderProps = {
    spaceBetween: 50,
    breakpoints: {
      300: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 6
      },
    },
  };

  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      <Slider settings={settings}>
        {certificates.map((certificate) => (
          <Slide key={certificate.id}>
            <CertificatesItem
              certificate={certificate}
              className="w-[156px] lg:w-[200px] lg:min-w-[200px]"
            />
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
