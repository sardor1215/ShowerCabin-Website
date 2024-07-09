import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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

export default function Navbar() {
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
      className="bg-custompurple border-y-2 sticky top-3 z-50 font-rubik border-y-customdarkp "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg viewBox="0 0 100 80" width="40" height="40">
                      <rect width="100" height="20"></rect>
                      <rect y="30" width="100" height="20"></rect>
                      <rect y="60" width="100" height="20"></rect>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 100 80" width="40" height="40">
                      <rect width="100" height="20"></rect>
                      <rect y="30" width="100" height="20"></rect>
                      <rect y="60" width="100" height="20"></rect>
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      // src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Shower_icon_-_Noun_Project_3670.svg/1200px-Shower_icon_-_Noun_Project_3670.svg.png"
                      src={logoHuge}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-12 rounded-md w-auto lg:block"
                      // src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Shower_icon_-_Noun_Project_3670.svg/1200px-Shower_icon_-_Noun_Project_3670.svg.png"
                      src={logoHuge}
                      alt="Your Company"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to="/contact"
                        className="mt-1 transition duration-150 hover:scale-110"
                      >
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-customdarkp text-white"
                              : "text-customdarkp hover:bg-customdarkp hover:text-white border-2  border-customdarkp ",
                            "px-3  py-2 rounded-md text-sm font-medium "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    <div className="">
                      <div className="flex gap-2    ">
                        <button
                          className="hover:bg-customdarkp hover:text-white transition duration-150 hover:scale-125  rounded-lg py-1 px-2 text-customdarkp border-2 border-customdarkp"
                          onClick={(e) => toggleHandler(e.target.value)}
                          value="en"
                        >
                          ENG
                        </button>

                        <button
                          className="hover:bg-customdarkp hover:text-white transition duration-150 hover:scale-125 rounded-lg py-1 px-2 text-customdarkp border-2 border-customdarkp"
                          value="tr"
                          onClick={(e) => toggleHandler(e.target.value)}
                        >
                          TR
                        </button>
                        <button
                          className="hover:bg-customdarkp hover:text-white transition duration-150 hover:scale-125 rounded-lg py-1 px-2 text-customdarkp border-2 border-customdarkp"
                          value="ru"
                          onClick={(e) => toggleHandler(e.target.value)}
                        >
                          RU
                        </button>
                      </div>
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
                  to="/contact"
                  className="transition duration-150 hover:scale-110"
                >
                  <Disclosure.Button
                    // onClick={handleScroll}
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-customdarkp hover:bg-customdarkp hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
              <div className="">
                <div className="flex gap-2    ">
                  <button
                    className="hover:bg-customdarkp hover:text-white transition duration-150 hover:scale-125  rounded-lg py-1 px-2 text-customdarkp border-2 border-customdarkp"
                    onClick={(e) => toggleHandler(e.target.value)}
                    value="en"
                  >
                    ENG
                  </button>

                  <button
                    className="hover:bg-customdarkp hover:text-white transition duration-150 hover:scale-125 rounded-lg py-1 px-2 text-customdarkp border-2 border-customdarkp"
                    value="tr"
                    onClick={(e) => toggleHandler(e.target.value)}
                  >
                    TR
                  </button>
                  <button
                    className="hover:bg-customdarkp hover:text-white transition duration-150 hover:scale-125 rounded-lg py-1 px-2 text-customdarkp border-2 border-customdarkp"
                    value="ru"
                    onClick={(e) => toggleHandler(e.target.value)}
                  >
                    RU
                  </button>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
