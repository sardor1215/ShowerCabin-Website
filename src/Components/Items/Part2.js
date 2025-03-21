import React from "react";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

let a1 = process.env.PUBLIC_URL + "/images/1.jpg";
let a2 = process.env.PUBLIC_URL + "/images/2.jpg";
let a3 = process.env.PUBLIC_URL + "/images/3.jpg";
let a4 = process.env.PUBLIC_URL + "/images/4.jpg";
let a5 = process.env.PUBLIC_URL + "/images/5.jpg";
const slides = [a1, a2, a3, a4, a5];

function Part2() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
          {t("featuredProducts") || "Featured Products"}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white">
          {t("productsTitle") || "Our Premium Selection"}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
          {t("productsSubtitle") ||
            "Discover our high-quality shower cabin solutions"}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 md:p-8 border border-neutral-100 dark:border-neutral-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
              {t("textpart2t")}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              {t("textpart2")}
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-neutral-800 dark:text-neutral-200">
                  {t("feature1") || "Premium quality materials"}
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-neutral-800 dark:text-neutral-200">
                  {t("feature2") || "Professional installation"}
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-neutral-800 dark:text-neutral-200">
                  {t("feature3") || "5-year warranty"}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#gallery"
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-200 shadow-sm"
              >
                {t("viewGallery") || "View Gallery"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 border border-primary-600 text-base font-medium rounded-md shadow-sm text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-200"
              >
                {t("getQuote") || "Get a Quote"}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-[1.02] relative">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-600 text-white text-sm font-medium">
                {t("bestSeller") || "Best Seller"}
              </span>
            </div>
            <Carousel autoSlide={true} autoSlideInterval={5000}>
              {slides.map((s, index) => (
                <img
                  key={index}
                  src={s}
                  alt={`${
                    t(`product_slide${index + 1}_alt`) ||
                    `Product slide ${index + 1}`
                  }`}
                  className="w-full h-full object-cover"
                />
              ))}
            </Carousel>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Part2;
