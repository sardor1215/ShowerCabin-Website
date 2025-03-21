import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "../Components/Items/Footer";
import Header from "../Components/Items/Header";
import InfoBox from "../Components/Items/InfoBox";
import Map from "../Components/Items/Map";
import Navbar from "../Components/Items/Navbar";

export default function Contact({ darkMode, toggleDarkMode }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="bg-custompurple pt-8 pb-8">
        <div className="place-items-center grid grid-cols-1 md:grid-cols-3 ">
          <div></div>
          <div className="text-center font-rubik text-customdarkp">
            <p className="text-3xl md:text-6xl">{t("contactHeader1")}</p>
            <p className="text-2xl md:text-5xl">{t("contactHeader2")}</p>
            <p className="text-xl md:text-4xl">{t("contactHeader3")}</p>
          </div>
          <div></div>
        </div>
      </div>

      <main className="relative py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white dark:bg-neutral-800 shadow-soft p-6"
            >
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                {t("contactFormTitle") || "Contact Us"}
              </h2>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {t("name") || "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {t("email") || "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {t("subject") || "Subject"}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {t("message") || "Message"}
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {t("send") || "Send Message"}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white dark:bg-neutral-800 shadow-soft p-6"
            >
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                {t("contactInfoTitle") || "Our Information"}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    {t("address") || "Address"}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    123 Main Street
                    <br />
                    New York, NY 10001
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    {t("phone") || "Phone"}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    +1 (555) 123-4567
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    {t("email") || "Email"}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    info@example.com
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    {t("hours") || "Working Hours"}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday: 10am - 2pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
