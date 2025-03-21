import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
let logoHuge = process.env.PUBLIC_URL + "/images/imagesa.png";

const lngs = [{ code: "en" }, { code: "tr" }, { code: "ru" }];

const navigation = [
  // { name: "Pricing", href: "#", current: true },
  // { name: "Team", href: "#", current: false },
  // { name: "Projects", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ darkMode, toggleDarkMode }) {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  const { t, i18n } = useTranslation();
  function toggleHandler(code) {
    i18n.changeLanguage(code);
  }
  return (
    <Disclosure
      as="nav"
      className={`bg-white dark:bg-neutral-900 shadow-soft sticky top-0 z-50 font-display ${
        darkMode ? "border-b border-neutral-800" : "border-b border-neutral-200"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-8 w-auto"
                      src={logoHuge}
                      alt="Your Company"
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={
                        item.href.startsWith("#") ? "/" + item.href : item.href
                      }
                      className="transition duration-200 ease-in-out group"
                    >
                      <span
                        className={classNames(
                          item.current
                            ? "text-primary-600 dark:text-primary-400"
                            : "text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400",
                          "px-3 py-2 text-sm font-medium rounded-md group-hover:bg-primary-50 dark:group-hover:bg-neutral-800"
                        )}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}

                  <div className="flex items-center space-x-4">
                    <DarkModeToggle
                      darkMode={darkMode}
                      toggleDarkMode={toggleDarkMode}
                    />
                    <div className="flex gap-2">
                      {lngs.map((lng) => (
                        <button
                          key={lng.code}
                          onClick={() => toggleHandler(lng.code)}
                          className="px-2 py-1 text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition duration-200 ease-in-out rounded-md hover:bg-primary-50 dark:hover:bg-neutral-800"
                        >
                          {lng.code.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href.startsWith("#") ? "/" + item.href : item.href}
                >
                  <Disclosure.Button
                    className={classNames(
                      item.current
                        ? "bg-primary-50 text-primary-600 dark:bg-neutral-800 dark:text-primary-400"
                        : "text-neutral-600 hover:bg-primary-50 hover:text-primary-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-primary-400",
                      "block w-full px-3 py-2 rounded-md text-base font-medium text-left"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}

              <div className="pt-4 px-3">
                <div className="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 pt-4">
                  <DarkModeToggle
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                  <div className="flex gap-2">
                    {lngs.map((lng) => (
                      <button
                        key={lng.code}
                        onClick={() => toggleHandler(lng.code)}
                        className="px-2 py-1 text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition duration-200 ease-in-out rounded-md hover:bg-primary-50 dark:hover:bg-neutral-800"
                      >
                        {lng.code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
