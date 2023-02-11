import React from "react";
import { useTranslation } from "react-i18next";

function VidBox() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-custompurple ">
      <div className="py-10 place-items-center grid md:grid-cols-2">
        <iframe
          className="rounded-lg w-4/5 md:w-72 lg:w-96 xl:w-96 2xl:w-4/6"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qoaJ6xGlIr8?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="text-center py-10 md:py-0 lg:py-0 xl:py-0 2xl:py-0 font-rubik text-customdarkp">
          <p className="text-2xl md:text-6xl ">{t("vidBox1")}</p>
          <p className="text-2xl md:text-4xl">{t("vidBox2")}</p>
          <p className="text-2xl md:text-8xl">{t("vidBox3")}</p>
        </div>
      </div>
    </div>
  );
}

export default VidBox;
