import React from "react";
import Carousel from "../Components/Items/Carousel";
import Footer from "../Components/Items/Footer";
import Header from "../Components/Items/Header";
import InfoBox from "../Components/Items/InfoBox";
import Intro from "../Components/Items/Intro";
import Map from "../Components/Items/Map";
import Navbar from "../Components/Items/Navbar";
import Part2 from "../Components/Items/Part2";
import VidBox from "../Components/Items/VidBox";
import DarkModeToggle from "../Components/Items/DarkModeToggle";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Main({ darkMode, toggleDarkMode }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="relative">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Intro />
          </div>
        </section>

        {/* Products Section */}
        <section
          id="products"
          className="py-12 sm:py-20 bg-neutral-50 dark:bg-neutral-800"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Part2 />
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {t("videoSectionTitle") || "Watch Our Videos"}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
                {t("videoSectionSubtitle") || "See our products in action"}
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              <VidBox
                title={t("showerCabinVideo") || "Shower Cabin Installation"}
                src="https://www.youtube.com/embed/qoaJ6xGlIr8?controls=0"
                desc={
                  t("showerCabinDesc") ||
                  "Watch how our professional team installs premium shower cabins with precision and care."
                }
              />
              <VidBox
                title={t("bathroomDesignVideo") || "Bathroom Design Ideas"}
                src="https://www.youtube.com/embed/qoaJ6xGlIr8?controls=0"
                desc={
                  t("bathroomDesignDesc") ||
                  "Get inspired by our bathroom design ideas featuring our shower cabin solutions."
                }
              />
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section
          id="about"
          className="py-12 sm:py-20 bg-neutral-50 dark:bg-neutral-800"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <InfoBox />
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Map />
          </div>
        </section>

        {/* Gallery Section - Using photos from your project */}
        <section
          id="gallery"
          className="py-12 sm:py-20 bg-neutral-50 dark:bg-neutral-800"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-center mb-12">
              {t("galleryTitle") || "Our Gallery"}
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item}.jpg`}
                    alt={
                      t(`gallery_image${item}_alt`) || `Gallery image ${item}`
                    }
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
