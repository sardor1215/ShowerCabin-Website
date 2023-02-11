import React from "react";
import { useTranslation } from "react-i18next";

function InfoBox() {
  const { t, i18n } = useTranslation();
  return (
    <div class="grid md:grid-cols-3 font-rubik bg-custompurple place-items-center">
      <div class="w-72 p-4 items-center">
        <h2 className="font-semibold text-xl">About Us</h2>
        <label class="d-inline">{t("aboutt1")}</label>
        {/* <a href="/about" class="">
          More
        </a> */}
        <div class="pt-2 ">
          <a href="https://www.facebook.com/">
            <i class="fa-brands fa-facebook text-left"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fa-brands fa-instagram text-left"></i>
          </a>
        </div>
      </div>
      <div class="w-72 p-5">
        <h2>{t("aboutt2")}</h2>
      </div>
      <div class="w-72 p-5 ">
        <h2 className="font-semibold text-xl">Contact</h2>
        <label className="flex">
          <div className="w-6 h-6">
            <svg
              viewBox="0 0 1024 1024"
              fill="#000000"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
                  fill=""
                ></path>
              </g>
            </svg>{" "}
          </div>
          Merit Park,75007, Alsancak,Kyrenia
        </label>
        <label className="flex">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.8284 6.75736C12.3807 6.75736 12.8284 7.20507 12.8284 7.75736V12.7245L16.3553 14.0653C16.8716 14.2615 17.131 14.8391 16.9347 15.3553C16.7385 15.8716 16.1609 16.131 15.6447 15.9347L11.4731 14.349C11.085 14.2014 10.8284 13.8294 10.8284 13.4142V7.75736C10.8284 7.20507 11.2761 6.75736 11.8284 6.75736Z"
                fill="#0F1729"
              ></path>{" "}
            </g>
          </svg>{" "}
          09.00-17.00{" "}
        </label>
        <label className="flex ">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <p>kyreaniacabin@gmail.com</p>
        </label>
        <label className="flex">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.40894 3.94109C7.73727 3.44596 7.28496 3.33417 7.04226 3.38154C6.04101 3.57694 5.44749 3.96671 4.64337 4.77082C3.54575 5.86842 3.01318 6.68799 3.24513 7.93061C3.51219 9.36128 4.81689 11.5448 8.41291 15.1409C12.0087 18.7366 14.2054 20.0551 15.6441 20.3277C16.3108 20.4541 16.8185 20.3553 17.2741 20.1309C17.7612 19.891 18.2302 19.4872 18.7681 18.9258C19.2452 18.4279 19.5347 18.0804 19.7373 17.7385C19.9303 17.4128 20.0671 17.0527 20.1728 16.5118C20.2202 16.2691 20.1084 15.8168 19.6132 15.145C19.1513 14.5185 18.4997 13.8963 17.8973 13.3884C17.4998 13.0532 16.8848 13.0318 16.388 13.4037L14.8697 14.5404C13.5001 15.5656 11.5864 15.4188 10.3781 14.2104L9.34333 13.1757C8.13502 11.9674 7.98816 10.0537 9.0134 8.68411L10.15 7.16583C10.5219 6.66902 10.5005 6.05402 10.1653 5.65651C9.65746 5.05425 9.03533 4.40283 8.40894 3.94109ZM9.59567 2.33122C10.4051 2.9279 11.1441 3.71478 11.6943 4.3672C12.6971 5.55642 12.6153 7.20992 11.7511 8.3644L10.6145 9.88268C10.191 10.4483 10.2458 11.2497 10.7575 11.7615L11.7923 12.7962C12.3041 13.308 13.1054 13.3627 13.6711 12.9393L15.1894 11.8027C16.3439 10.9385 17.9973 10.8566 19.1865 11.8593C19.8391 12.4095 20.6262 13.1486 21.223 13.9582C21.7864 14.7225 22.3533 15.7809 22.1357 16.8953C21.9959 17.6108 21.7906 18.1965 21.4579 18.758C21.1348 19.3034 20.715 19.7848 20.2122 20.3095C19.6296 20.9176 18.9653 21.5274 18.1578 21.9251C17.3189 22.3383 16.3708 22.5011 15.2716 22.2928C13.1786 21.8961 10.6038 20.1601 6.99869 16.5551C3.39388 12.9502 1.66901 10.3864 1.27909 8.2976C0.854079 6.02071 2.03716 4.54859 3.22916 3.3566C4.21375 2.37202 5.14736 1.71361 6.65918 1.41857C7.7733 1.20114 8.83152 1.76792 9.59567 2.33122Z"
                fill="#0F1729"
              ></path>{" "}
            </g>
          </svg>
          <a href="tel:1234567">+90 533 883-38-67</a>
        </label>
      </div>
    </div>
  );
}

export default InfoBox;
