import { useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import TopHeader from "./TopHeader";
import hamburger from "../../assets/images/home/menu-icon.png";

import { MdClose, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { HeaderData } from "./HeaderData";
import { AppDispatch, RootState } from "../../store";
// @ts-ignore
import { fetchProgramMenu, NavbarProgramType } from "../../store/header/programMenuThunk";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const location = useLocation();
  const { bottomHeaderData } = HeaderData[0];
  const columnGroups = [["After Class 10th", "After Polytechnic"], ["After Class 12th"], ["Industry Honors Programs"], ["After Graduation", "After Post Graduation"]];
  const [sideMenu, setSideMenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [subMenu, setSubMenu] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  // @ts-ignore
  const { data: programMenu, loading } = useSelector((state: RootState) => state.programMenu);

  // const slugify = (str: string) =>
  //   str
  //     .toLowerCase()
  //     .trim()
  //     .replace(/[()]/g, "")      // remove brackets
  //     .replace(/\s+/g, "-");     // replace spaces with hyphen


  const slugify = (str: string) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[()]/g, "")            // remove brackets
      .replace(/&/g, "")               // remove &
      .replace(/\./g, "-")             // convert . to -
      .replace(/\s+/g, "-")            // spaces to -
      .replace(/-+/g, "-")             // remove multiple -
      .replace(/-in-/g, "-")           // remove only '-in-'
      .replace(/^b-c-a\b/, "bca")      // convert b-c-a to bca
      .replace(/^-|-$/g, "");          // remove starting/ending -
  };



  useEffect(() => {
    dispatch(fetchProgramMenu());
  }, [dispatch]);

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
      <header className="fixed top-0 left-0 w-full z-[999] transition-all duration-500">
        <TopHeader />

        <div className={`py-2 items-stretch header ${isActive ? "bg-[#14284e] active" : ""}`}>
          <div className={`${Classes["container"]} relative`}>
            <div className="flex flex-row justify-between">
              {/* LOGO */}
              <Link to="/" className="logo_div flex items-center lg:gap-1 xl:gap-3 cursor-pointer">
                <img src={logo} alt="logo" className="max-w-[220px] xl:max-w-full" />
              </Link>

              {/* DESKTOP MENU */}
              <div className="hidden lg:block">
                <nav className="flex items-center h-full ">
                  {bottomHeaderData[0].navitems.map((data, index) => {
                    const isMega = data?.isMegaMenu === true;

                    return (
                      <div
                        onMouseEnter={() => setShowMegaMenu(true)}
                        onMouseLeave={() => setShowMegaMenu(false)}
                        key={index}
                        className="relative px-[5px] lg:px-2.5 xl:px-[15px] py-4 group text-[15px] cursor-pointer"
                      >
                        <div
                          className={`flex items-center text-[13px] xl:text-[15px] text-white group-hover:text-[#ffb703] uppercase ${location.pathname === data.path ? "active" : ""}`}
                        >
                          {data.item}
                        </div>

                        {/* NORMAL DROPDOWN */}
                        {!isMega && showMegaMenu && data?.subItem && (
                          <div className="absolute top-[50px] right-0 bg-white rounded-md shadow-md">
                            <span className="hidden group-hover:block manage-top-arrow"></span>
                            <ul className="transition-all w-full min-w-[290px] duration-300 max-h-0 group-hover:max-h-[550px] overflow-hidden rounded-md ">
                              {data.subItem.map((value, i) => (
                                <Link
                                  key={i}
                                  onClick={() => setShowMegaMenu(false)}
                                  to={value.path}
                                  className={`block text-[15px] px-3 py-3 hover-parline hover:text-[#ffb703] ${i !== 0 && "border-t border-gray-200"}`}
                                >
                                  {value.item}
                                </Link>
                              ))}
                            </ul>
                          </div>
                        )}
                        {isMega && showMegaMenu && !data?.subItem && <span className="hidden group-hover:block manage-top-arrow big"></span>}
                        {isMega && showMegaMenu && (
                          <div
                            className="
                              fixed left-1/2 -translate-x-1/2
                              top-[108px] xl:top-[120px] bg-white rounded-md
                              hidden group-hover:flex
                              border-t-4 border-t-yellow-500
                              border-b-4 border-b-blue-500
                              w-[95vw] px-10 py-6 gap-9 z-9999 max-h-[75vh] overflow-y-auto"
                          >
                            {/* <span className="hidden group-hover:block manage-top-arrow big"></span> */}
                            <div className="grid grid-cols-4 gap-6 w-full">
                              {columnGroups.map((group, colIndex) => (
                                <div key={colIndex} className="space-y-6">
                                  {programMenu
                                    .filter((type) => group.includes(type.programFlagName))
                                    .map((type) => {
                                      const programFlagSlug = slugify(type.programFlagName);

                                      return (
                                        <div key={type.programFlagId}>
                                          {/* BLUE HEADING */}
                                          <h3 className="font-medium text-[17px] p-3 rounded-lg inline-block hover:bg-[#ffb703] text-[#0f4a85] hover:text-black">
                                            <Link onClick={() => setShowMegaMenu(false)} to={`/${programFlagSlug}`} state={{ programTypeId: type.programFlagId }}>
                                              {type.programFlagName}
                                            </Link>
                                          </h3>

                                          <ul className="mt-2 list-none!">
                                            {/* CASE 1: programs */}
                                            {type.programs.length > 0 &&
                                              type.programs.map((prog) => (
                                                <li key={prog.programId}>
                                                  <Link
                                                    onClick={() => setShowMegaMenu(false)}
                                                    to={`/program/${slugify(prog.programName)}`}
                                                    state={{ programTypeId: type.programFlagId, programId: prog.programId }}
                                                    className="text-[15px] px-3 py-2 rounded-md text-[#212529] hover:text-[#ffb703] border border-white hover:border-[#ffb703] block"
                                                  >
                                                    {prog.programName}
                                                  </Link>
                                                </li>
                                              ))}

                                            {/* CASE 2: disciplines */}
                                            {type.programs.length === 0 &&
                                              type.disciplines.map((disc) => (
                                                <li key={disc.disciplineId}>
                                                  <Link
                                                    onClick={() => setShowMegaMenu(false)}
                                                    to={`/${programFlagSlug}/${slugify(disc.disciplineName)}`}
                                                    state={{
                                                      programTypeId: type.programFlagId,
                                                      disciplineId: disc.disciplineId,
                                                    }}
                                                    className="text-[15px] px-3 py-2 rounded-md text-[#212529] hover:text-[#ffb703] border border-white hover:border-[#ffb703] block"
                                                  >
                                                    {disc.disciplineName}
                                                  </Link>
                                                </li>
                                              ))}
                                          </ul>
                                        </div>
                                      );
                                    })}
                                </div>
                              ))}
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
                <img
                  src={hamburger}
                  alt="Menu"
                  className="cursor-pointer w-[30px] h-[21px]"
                  onClick={() => setSideMenu(true)}
                />
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
                  {/* ROW */}
                  <div className="flex justify-between items-center px-2 ">
                    <Link
                      to={data.path}
                      className="hover:text-[#ffb703]"
                      onClick={() => setSideMenu(false)}
                    >
                      {data.item}
                    </Link>

                    {(data.subItem || isMega) && (
                      <button
                        onClick={() => setSubMenu(subMenu === data.id ? null : data.id)}
                        className="border-[1px] border-[#0000002e] px-[2px] py-[3px]"
                      >
                        <MdOutlineKeyboardArrowDown
                          size={25}
                          className={`transition-all bg-[#00000008] text-[#616161] ${subMenu === data.id ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* MOBILE DROPDOWN */}
                  {(data.subItem || isMega) && (
                    <ul className={`transition-all duration-700 overflow-hidden ${subMenu === data.id ? "max-h-full" : "max-h-0"}`}>
                      <span className="w-full block h-0.5 mt-2 bg-[#ffb703]"></span>

                      {/* NORMAL DROPDOWN */}
                      {!isMega && data.subItem?.map((value, i) => (
                        <Link
                          key={i}
                          to={value.path}
                          className={`block text-sm px-5 py-3 hover:text-[#ffb703] hover:bg-gray-50 ${i !== 0 && "border-t border-gray-200"}`}
                          onClick={() => setSideMenu(false)}
                        >
                          {value.item}
                        </Link>
                      ))}

                      {/* MEGA MENU USING API DATA */}
                      {isMega && (
                        <div className="px-2 py-2 space-y-4">
                          {columnGroups.map((group, colIndex) => (
                            <div key={colIndex} className="space-y-3">
                              {programMenu
                                .filter((type) => group.includes(type.programFlagName))
                                .map((type) => {
                                  const programFlagSlug = slugify(type.programFlagName);

                                  return (
                                    <div key={type.programFlagId}>
                                      <h3 className="font-medium text-sm p-2 rounded-lg bg-gray-100 text-[#0f4a85] border-b border-gray-300">
                                        <Link
                                          to={`/${programFlagSlug}`}
                                          state={{ programTypeId: type.programFlagId }}
                                          onClick={() => setSideMenu(false)}
                                          className="hover:text-[#ffb703] block"
                                        >
                                          {type.programFlagName}
                                        </Link>
                                      </h3>

                                      <ul className="ml-2 mt-1 space-y-1 list-none!">
                                        {type.programs.length > 0 ? (
                                          type.programs.map((prog) => (
                                            <li key={prog.programId}>
                                              <Link
                                                to={`/program/${slugify(prog.programName)}`}
                                                state={{ programTypeId: type.programFlagId, programId: prog.programId }}
                                                className="text-sm px-3 py-2 text-[#212529] hover:text-[#ffb703] block hover:bg-gray-50 rounded"
                                                onClick={() => setSideMenu(false)}
                                              >
                                                {prog.programName}
                                              </Link>
                                            </li>
                                          ))
                                        ) : (
                                          type.disciplines.map((disc) => (
                                            <li key={disc.disciplineId}>
                                              <Link
                                                to={`/${programFlagSlug}/${slugify(disc.disciplineName)}`}
                                                state={{
                                                  programTypeId: type.programFlagId,
                                                  disciplineId: disc.disciplineId
                                                }}
                                                className="text-sm px-3 py-2 text-[#212529] hover:text-[#ffb703] block hover:bg-gray-50 rounded"
                                                onClick={() => setSideMenu(false)}
                                              >
                                                {disc.disciplineName}
                                              </Link>
                                            </li>
                                          ))
                                        )}
                                      </ul>
                                    </div>
                                  );
                                })}
                            </div>
                          ))}
                        </div>
                      )}
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