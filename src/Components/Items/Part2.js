import React from "react";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";
let a1 = process.env.PUBLIC_URL + "/images/1.jpg";
let a2 = process.env.PUBLIC_URL + "/images/2.jpg";
let a3 = process.env.PUBLIC_URL + "/images/3.jpg";
let a4 = process.env.PUBLIC_URL + "/images/4.jpg";
let a5 = process.env.PUBLIC_URL + "/images/5.jpg";
const slides = [a1, a2, a3, a4, a5];

function Part2() {
  const { t, i18n } = useTranslation();
  return (
    <div className="grid place-items-center   md:grid-cols-2 font-rubik text-xl text-gray-800 bg-custompurple">
      <div>
        <div class=" text-left py-10 place-items-right w-96">
          <h1 className="text-2xl">{t("textpart2t")}</h1>
          <p>{t("textpart2")}</p>
        </div>
      </div>
      <div className="w-96   shadow-xl transition duration-150 hover:scale-105">
        <Carousel className="">
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Part2;
