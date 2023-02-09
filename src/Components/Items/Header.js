import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div className="grid md:grid-cols-3 py-2  text-customdarkp border-b-customdarkp      text-xl text-center font-mono text-black bg-custompurple text-white ">
      <div className="">
        <p className="hover:scale-125 ease-in-out duration-300">
          {t("ordernow")}
        </p>
      </div>
      <div>LIFE IS BETTER AT THE CABIN!</div>
      <div className="">
        <a className=" text-customdarkp   font-montserrat" href="tel:1234567">
          <p className="hover:scale-125 hover:text-blue-800 ease-in-out duration-300">
            +90 533 123 45 67
          </p>
        </a>
      </div>
    </div>
  );
}

export default Header;
