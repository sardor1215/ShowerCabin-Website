import React from "react";
import { useTranslation } from "react-i18next";

function VidBox({ title, src, desc }) {
  const { t } = useTranslation();

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800 h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <iframe
          src={src}
          title={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
          {title || t("videoTitle")}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 flex-grow">
          {desc || t("videoDescription")}
        </p>

        <div className="mt-4">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {t("watchOnYoutube") || "Watch on YouTube"}
            <svg
              className="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VidBox;
