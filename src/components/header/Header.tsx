import { useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import TopHeader from "./TopHeader";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { HeaderData } from "./HeaderData";

const Header = () => {
  const location = useLocation();
  const { bottomHeaderData } = HeaderData[0];
  const [sideMenu, setSideMenu] = useState(false);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) setIsActive(true);
      else setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sideMenu) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [sideMenu]);


  return (
    <div>
      <header className="fixed top-0 left-0 w-full transition-all duration-500 z-[999]">
        <TopHeader />

        <div
          className={`py-2 items-stretch header ${isActive ? "bg-[#0e2f46] active" : ""
            }`}
        >
          <div className={`${Classes["container"]} relative`}>
            <div className="flex flex-row justify-between">
              {/* LOGO */}
              <Link
                to="/"
                className="logo_div flex items-center lg:gap-1 xl:gap-3 cursor-pointer"
              >
                <div>
                  <img
                    src={bottomHeaderData[0].logo}
                    alt=""
                    className="h-[35px] lg:h-[57px] max-w-full"
                  />
                </div>

                <div>
                  <h2
                    className={`font-bold lg:text-[1rem] xl:text-[1.4rem] text-white ${isActive
                      ? "text-white"
                      : location.pathname !== "/"
                        ? "text-white"
                        : ""
                      }`}
                  >
                    SHRI RAMSWAROOP
                    <div className="text-[0.5rem] font-semibold">
                      MEMORIAL COLLEGE OF ENGINEERING & MANAGEMENT
                    </div>
                  </h2>
                </div>
              </Link>

              {/* DESKTOP NAV */}
              <div className="hidden lg:block">
                <div className="flex items-center justify-center h-full">
                  <nav className="flex lg:gap-2 xl:gap-3 2xl:gap-4">
                    {bottomHeaderData[0].navitems.map((data, index) => {
                      const isMega = data?.isMegaMenu === true;

                      return (
                        <div
                          key={index}
                          className="relative group py-6 text-sm uppercase cursor-pointer"
                        >
                          <Link
                            to={data.path}
                            className={`flex items-center text-white ${isActive
                              ? "text-white"
                              : location.pathname !== "/"
                                ? "text-white"
                                : ""
                              } hover:text-[#ffb703] [&.active]:text-[#ffb703] ${location.pathname === data.path ? "active" : ""
                              }`}
                          >
                            {data.item}
                          </Link>

                          {/* ------------------------------ */}
                          {/* 🌟 NORMAL SUBMENU */}
                          {/* ------------------------------ */}
                          {!isMega && data?.subItem && (
                            <div className="absolute top-[59px] xl:top-[60px] right-0 bg-white rounded-md manage-shadow-drop-down">
                              <span className="hidden group-hover:block manage-top-arrow"></span>

                              <ul className="transition-all w-full min-w-[250px] duration-300 h-full overflow-hidden max-h-0 group-hover:max-h-[500px] group-hover:border rounded-md border-[#ffb703] group-hover:overflow-y-auto hide-scrollbar">
                                {data?.subItem.map((value, ind) => (
                                  <Link
                                    key={ind}
                                    to={value.path}
                                    className={`block px-3 py-3 parentclass hover:text-[#ffb703] ${ind !== 0 && "border-t border-gray-200"
                                      }`}
                                  >
                                    {value.item}
                                  </Link>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* 🌟 MEGA MENU (Programs) */}
                          {isMega && data?.megaMenu && (
                            <div
                              className="
                              fixed
                              left-1/2
                              -translate-x-1/2
                              top-[120px]
                            bg-white
                              rounded-md
                              manage-shadow-drop-down
                              hidden
                              group-hover:flex
                              w-[95vw]
                              px-10
                              py-6
                              gap-9
                              z-[9999]
                              "
                            >


                              <span className="hidden group-hover:block manage-top-arrow"></span>

                              <div className="grid grid-cols-4 gap-6 mt-10 w-full">

                                {/* COLUMN 1 */}
                                <div>
                                  {data.megaMenu.slice(0, 2).map((section, idx) => (
                                    <div key={idx} className="mb-6">
                                      <Link to={section.path} className="font-semibold text-[#0e2f46] hover:text-[#ffb703]">
                                        {section.heading}
                                      </Link>

                                      <ul className="mt-4 space-y-2">
                                        {section.item.map((sub, subIdx) => (
                                          <li key={subIdx} className="list-none mb-6">
                                            <Link
                                              to={sub.path}
                                              className="text-sm text-gray-700 hover:text-[#ffb703]"
                                            >
                                              {sub.item}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>

                                {/* COLUMN 2 */}
                                <div>
                                  {data.megaMenu.slice(2, 3).map((section, idx) => (
                                    <div key={idx}>
                                      <Link to={section.path} className="font-semibold text-[#0e2f46] hover:text-[#ffb703]">
                                        {section.heading}
                                      </Link>

                                      <ul className="mt-8 space-y-2">
                                        {section.item.map((sub, subIdx) => (
                                          <li key={subIdx} className="list-none mb-6">
                                            <Link
                                              to={sub.path}
                                              className="text-sm text-gray-700 hover:text-[#ffb703]"
                                            >
                                              {sub.item}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>

                                {/* COLUMN 3 */}
                                <div>
                                  {data.megaMenu.slice(3, 4).map((section, idx) => (
                                    <div key={idx}>
                                      <Link to={section.path} className="font-semibold text-[#0e2f46] hover:text-[#ffb703]">
                                        {section.heading}
                                      </Link>

                                      <ul className="mt-8 space-y-2 max-h-[70vh] overflow-y-auto pr-2">
                                        {section.item.map((sub, subIdx) => (
                                          <li key={subIdx} className="list-none mb-6">
                                            <Link
                                              to={sub.path}
                                              className="text-sm text-gray-700 hover:text-[#ffb703]"
                                            >
                                              {sub.item}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>

                                {/* COLUMN 4 */}
                                <div>
                                  {data.megaMenu.slice(4, 6).map((section, idx) => (
                                    <div key={idx} className="mb-6">
                                      <Link to={section.path} className="font-semibold text-[#0e2f46] hover:text-[#ffb703]">
                                        {section.heading}
                                      </Link>

                                      <ul className="mt-8 space-y-2">
                                        {section.item.map((sub, subIdx) => (
                                          <li key={subIdx} className="list-none mb-6">
                                            <Link
                                              to={sub.path}
                                              className="text-sm text-gray-700 hover:text-[#ffb703]"
                                            >
                                              {sub.item}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>

                              </div>
                            </div>
                          )}


                        </div>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* MOBILE MENU ICON */}
              <div className="lg:hidden my-auto">
                <GiHamburgerMenu
                  size={20}
                  className={`cursor-pointer text-white ${isActive
                    ? "text-white"
                    : location.pathname !== "/"
                      ? "text-white"
                      : ""
                    }`}
                  onClick={() => setSideMenu(!sideMenu)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE BACKDROP */}
        <div
          className={`lg:hidden ${sideMenu ? "block" : "hidden"
            } w-full h-[calc(100vh-103px)] bg-opacity-50 fixed top-[100px] right-0`}
        ></div>

        {/* MOBILE SIDEBAR MENU */}
        <div
          className={`fixed top-[100px] pt-4 h-[calc(100vh-92px)] right-0 bg-white border-t-2 border-blue-900 overflow-auto mobile-scroll w-full lg:hidden transition-all duration-300 ${sideMenu ? "max-w-[250px]" : "max-w-0"
            }`}
        >
          {/* Mobile menu stays same */}
          {/* ... your same mobile code ... */}
          <span className="absolute w-full inline-block max-w-10 left-2 top-2 py-2 bg-[#0e2f46] text-white px-2">
            <MdClose
              onClick={() => setSideMenu(false)}
              size={24}
              className="cursor-pointer"
            />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
