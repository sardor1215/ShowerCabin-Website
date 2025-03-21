import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function InfoBox() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-soft overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            {t("aboutTitle") || "About Us"}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            {t("aboutSubtitle") || "Learn more about our company and services"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Us Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl shadow-soft"
          >
            <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-4">
              {t("aboutUs") || "About Us"}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              {t("aboutt1")}
            </p>
            <div className="pt-2 flex space-x-4">
              <a
                href="https://www.facebook.com/"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Our Mission Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl shadow-soft"
          >
            <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-4">
              {t("ourMission") || "Our Mission"}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              {t("aboutt2")}
            </p>
          </motion.div>

          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl shadow-soft"
          >
            <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-4">
              {t("contact") || "Contact"}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 text-primary-600 dark:text-primary-400 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9C9.5 10.38 10.62 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-2 text-neutral-700 dark:text-neutral-300">
                  Karaoğlanoğlu caddesi 47/c, Alsancak, Kyrenia, Cyprus
                </span>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 text-primary-600 dark:text-primary-400 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.25 7C12.25 6.59 11.91 6.25 11.5 6.25C11.09 6.25 10.75 6.59 10.75 7V12.75C10.75 13.16 11.09 13.5 11.5 13.5H15.5C15.91 13.5 16.25 13.16 16.25 12.75C16.25 12.34 15.91 12 15.5 12H12.25V7Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-2 text-neutral-700 dark:text-neutral-300">
                  08:00 - 18:00
                </span>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 text-primary-600 dark:text-primary-400 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.3 16.9C18.4 16.9 17.5 16.7 16.7 16.5C16.4 16.4 16 16.5 15.8 16.7L13.9 18.6C11.4 17.5 9 15.1 7.9 12.6L9.8 10.7C10 10.5 10.1 10.1 10 9.8C9.8 9 9.6 8.1 9.6 7.2C9.6 6.6 9.1 6 8.4 6H5.6C4.9 6 4 6.3 4 7.2C4 15.1 10.8 22 18.7 22C19.5 22 20 21.1 20 20.4V17.6C20 16.9 19.4 16.4 18.7 16.4L19.3 16.9Z"
                    fill="currentColor"
                  />
                </svg>
                <a
                  href="tel:+905338513075"
                  className="ml-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  +90 533-851-30-75
                </a>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 text-primary-600 dark:text-primary-400 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20ZM4 18V8L12 13L20 8V18H4Z"
                    fill="currentColor"
                  />
                </svg>
                <a
                  href="mailto:orbashower@gmail.com"
                  className="ml-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  orbashower@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
