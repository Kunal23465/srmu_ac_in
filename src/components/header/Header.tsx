import { useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import TopHeader from "./TopHeader";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { HeaderData } from "./HeaderData";

const Header = () => {
  const location = useLocation();
  const { bottomHeaderData } = HeaderData[0];

  const [sideMenu, setSideMenu] = useState(false);
  const [subMenu, setSubMenu] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 35);
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

        <div className={`py-2 items-stretch header ${isActive ? "bg-[#0e2f46] active" : ""}`}>
          <div className={`${Classes["container"]} relative`}>
            <div className="flex flex-row justify-between">
              {/* LOGO */}
              <Link to="/" className="logo_div flex items-center lg:gap-1 xl:gap-3 cursor-pointer">
                <img src={bottomHeaderData[0].logo} alt="logo" className="h-[35px] lg:h-[57px]" />

                <h2 className={`font-bold lg:text-[1rem] xl:text-[1.4rem] text-white`}>
                  SHRI RAMSWAROOP
                  <div className="text-[0.5rem] font-semibold">MEMORIAL COLLEGE OF ENGINEERING & MANAGEMENT</div>
                </h2>
              </Link>

              {/* DESKTOP MENU */}
              <div className="hidden lg:block">
                <nav className="flex items-center h-full">
                  {bottomHeaderData[0].navitems.map((data, index) => {
                    const isMega = data?.isMegaMenu === true;

                    return (
                      <div key={index} className="relative px-[15px] py-4 group text-[15px] uppercase cursor-pointer">
                        <Link to={data.path} className={`flex items-center text-white hover:text-[#ffb703] ${location.pathname === data.path ? "active" : ""}`}>
                          {data.item}
                        </Link>

                        {/* NORMAL DROPDOWN */}
                        {!isMega && data?.subItem && (
                          <div className="absolute top-[60px] right-0 bg-white rounded-md">
                            <span className="hidden group-hover:block manage-top-arrow"></span>

                            <ul className="transition-all w-full min-w-[250px] duration-300 max-h-0 group-hover:max-h-[500px] overflow-hidden group-hover:border rounded-md ">
                              {data.subItem.map((value, i) => (
                                <Link key={i} to={value.path} className={`block px-3 py-3 hover:text-[#ffb703] ${i !== 0 && "border-t border-gray-200"}`}>
                                  {value.item}
                                </Link>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* MEGA MENU */}
                        {isMega && data?.megaMenu && (
                          <div
                            className="
                            fixed left-1/2 -translate-x-1/2
                            top-[120px] bg-white rounded-md
                            hidden group-hover:flex  border-t-4 border-t-yellow-500 border-b-4 border-b-blue-500 w-[95vw] px-10 py-6 gap-9 z-[9999]"
                          >
                            <span className="hidden group-hover:block manage-top-arrow big"></span>

                            <div className="grid grid-cols-4 gap-6 w-full">
                              {data.megaMenu.map((data) => {
                                return (
                                  <div className="w-full">
                                    {data.column.map((section, secIdx) => (
                                      <div key={secIdx} className="mb-6">
                                        <Link to={section.path} className="font-medium text-base p-3 rounded-lg inline-block hover:bg-[#ffb703]  text-[#0f4a85] hover:text-black">
                                          {section.heading}
                                        </Link>

                                        <ul className="mt-2 px-3 space-y-2 list-none!">
                                          {section.item.map((sub, subIdx) => (
                                            <li key={subIdx}>
                                              <Link to={sub.path} className="text-sm text-gray-700 hover:text-[#ffb703]">
                                                {sub.item}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* HAMBURGER */}
              <div className="lg:hidden my-auto">
                <GiHamburgerMenu size={20} className="cursor-pointer text-white" onClick={() => setSideMenu(true)} />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE BACKDROP */}
        {sideMenu && <div className="lg:hidden w-full h-[calc(100vh-103px)] bg-opacity-50 fixed top-[100px] right-0"></div>}

        {/* MOBILE MENU */}
        <div
          className={`fixed top-[100px] pt-4 h-[calc(100vh-92px)] sm:h-[calc(100vh-103px)]
          bg-white border-t-2 border-blue-900 overflow-auto mobile-scroll
          transition-all duration-300 right-0 lg:hidden ${sideMenu ? "max-w-[250px]" : "max-w-0"}`}
        >
          <ul className="w-full flex flex-col list-none mt-10 border-y">
            {bottomHeaderData[0].navitems.map((data, index) => {
              const isMega = data?.isMegaMenu === true;

              return (
                <li key={index} className={`relative w-full text-sm uppercase cursor-pointer py-2 ${index !== 0 && "border-t border-gray-200"}`}>
                  {/* ROW (NO WRAPPING OF SUBMENU INSIDE LINK) */}
                  <div className="flex justify-between items-center px-2">
                    <Link to={data.path} className="hover:text-[#ffb703]" onClick={() => setSideMenu(false)}>
                      {data.item}
                    </Link>

                    {(data.subItem || isMega) && (
                      <button onClick={() => setSubMenu(subMenu === data.id ? null : data.id)}>
                        <MdOutlineKeyboardArrowDown size={22} className={`transition-all ${subMenu === data.id ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>

                  {/* MOBILE DROPDOWN (Mega Menu → Normal List) */}
                  {(data.subItem || isMega) && (
                    <ul className={`transition-all duration-700 overflow-hidden ${subMenu === data.id ? "mx-h-full" : "max-h-0"}`}>
                      <span className="w-full block h-0.5 mt-2 bg-[#ffb703]"></span>

                      {/* NORMAL DROPDOWN */}
                      {!isMega &&
                        data.subItem?.map((value, i) => (
                          <a
                            key={i}
                            href={value.path}
                            className={`block px-5 py-3 hover:text-[#ffb703] ${i !== 0 && "border-t border-gray-200"}`}
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(value.path, "_blank");
                              setSideMenu(false);
                            }}
                          >
                            {value.item}
                          </a>
                        ))}

                      {/* MEGA MENU → SIMPLE LIST ON MOBILE */}
                      {isMega &&
                        data.megaMenu?.map((ele) => {
                          return ele.column.map((section, secIdx) => (
                            <div key={secIdx}>
                              <p className="font-semibold px-5 py-2 text-[#0e2f46] border-b border-gray-200">{section.heading}</p>

                              {section.item.map((sub, subIdx) => (
                                <a
                                  key={subIdx}
                                  href={sub.path}
                                  className={`block px-5 py-2 text-gray-700 hover:text-[#ffb703]  border-b border-gray-200`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(sub.path, "_blank");
                                    setSideMenu(false);
                                  }}
                                >
                                  {sub.item}
                                </a>
                              ))}
                            </div>
                          ));
                        })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CLOSE ICON */}
          <span className="absolute left-2 top-2 bg-[#0e2f46] text-white px-2 py-2">
            <MdClose onClick={() => setSideMenu(false)} size={24} className="cursor-pointer" />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
