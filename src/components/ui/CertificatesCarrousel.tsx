"use client";

import { certificates } from "@/constants";
import { Slider, SliderProps, Slide } from "../../lib/index";
import CertificatesItem from "./certificates-item";

const CardSlider = () => {
  const settings: SliderProps = {
    spaceBetween: 50,
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3
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
              className="w-[156px] md:w-[200px] md:min-w-[200px]"
            />
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
