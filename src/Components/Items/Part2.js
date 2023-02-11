import React from "react";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";
const slides = [
  "https://pca.gr/wp-content/uploads/2021/02/0715_PCA_Shower-cabins_A04_4200K-min-433x516.jpg",
  "https://i.pinimg.com/originals/5d/b8/0f/5db80f6910a3276712ea6b8f6d9b2b29.png",
  "https://images.victoriaplum.com/vp_prod_images/c68f898d-36e8-4438-9a11-38f9824c70ba.jpg?auto=format%2Ccompress&q=55&w=600",
  "https://mineraskifer.no/app/uploads/2021/06/Bad-hytte-gra%CC%8A-fliser_02-819x1024.jpeg",
];

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
