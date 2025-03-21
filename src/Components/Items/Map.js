import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Map() {
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
        <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-2">
          {t("findUs") || "Find Us"}
        </span>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          {t("locationTitle") || "Our Location"}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
          {t("locationSubtitle") ||
            "Visit us at our showroom to see our products in person"}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="bg-white dark:bg-neutral-800 p-2 md:p-4 rounded-2xl shadow-lg overflow-hidden">
            <iframe
              className="w-full rounded-xl aspect-[16/9]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.336189986263!2d33.223294975442045!3d35.347302148246044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de0d3b45e0d2eb%3A0xb13823fc6f421242!2sk%C4%B1br%C4%B1s%20orba%20sanayi%20ltd.!5e0!3m2!1sen!2s!4v1720557670662!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orba Duşakabin Location"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 h-full border border-neutral-100 dark:border-neutral-700">
            <h3 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white">
              {t("contactDetails") || "Contact Details"}
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-start mb-2">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                      {t("addressLabel") || "Address"}
                    </h4>
                    <address className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 not-italic">
                      Karaoğlanoğlu caddesi 47/c
                      <br />
                      Alsancak, Kyrenia
                      <br />
                      Cyprus
                    </address>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-2">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                      {t("phoneLabel") || "Phone"}
                    </h4>
                    <a
                      href="tel:+905338513075"
                      className="mt-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      +90 533-851-30-75
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-2">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                      {t("emailLabel") || "Email"}
                    </h4>
                    <a
                      href="mailto:orbashower@gmail.com"
                      className="mt-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      orbashower@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                      {t("workingHoursLabel") || "Working Hours"}
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {t("mondayToFriday") || "Monday to Friday"}: 08:00 - 18:00
                      <br />
                      {t("saturday") || "Saturday"}: 09:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-200"
              >
                {t("getInTouch") || "Get in Touch"}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Map;
