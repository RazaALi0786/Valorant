import { useEffect, useRef, useState } from "react";
import Logo from "/src/assets/images/Valorant-aPVsZquE_brandlogos.net.svg";
import { NavLink } from "react-router-dom";
function Nav() {
  // State for the dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  // Ref for the dropdown menu
  const dropDownRef = useRef(null);
  const hamDropDownRef = useRef(null);

  // Event listener to close the dropdown menu when clicking outside
  useEffect(() => {
    function handleClickedOutside(e) {
      // If the dropdown menu is open and the click is outside the dropdown menu, then close the dropdown menu
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("click", handleClickedOutside);

    // Cleanup function (good practice)
    return () => {
      document.removeEventListener("click", handleClickedOutside);
    };

    // Empty dependency array to run the effect only once on mount and unmount
  }, []);

  useEffect(() => {
    function handleClickedOutside(e) {
      if (
        hamDropDownRef.current &&
        !hamDropDownRef.current.contains(e.target)
      ) {
        setShowHamburgerMenu(false);
      }
    }

    document.addEventListener("click", handleClickedOutside);

    return () => {
      document.removeEventListener("click", handleClickedOutside);
    };
  }, []);

  function handleAgentToggle() {
    setShowDropdown(!showDropdown);
  }
  function handleHamburgerMenuToggle() {
    setShowHamburgerMenu(!showHamburgerMenu);
  }

  return (
    <nav className=" bg-[#111111] border-gray-700 font-valorant">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto md:py-8 md:text-xl">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8 text-white" alt="Valorant Logo" />
          <span className="self-center text-2xl font-semibold text-red-500 whitespace-nowrap">
            VALORANT
          </span>
        </a>
        <button
          ref={hamDropDownRef}
          onClick={handleHamburgerMenuToggle}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          aria-controls="navbar-dropdown"
          aria-expanded={showHamburgerMenu ? "true" : "false"}
          title="Toggle main menu"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h15"
            />
          </svg>
        </button>
        {showHamburgerMenu && (
          <div className="  bg-opacity-65 absolute right-0 flex flex-col w-40 gap-4 pl-3 px-4 py-5 bg-[#111111] rounded-lg shadow-md top-2 z-10">
            <NavLink to={'/'} className="text-white ">HOME</NavLink>
            <div className="relative group">
              <NavLink to={'/agents'} className="flex text-white cursor-pointer">
                AGENTS{" "}
                <svg
                  className="w-2.5 h-4 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </NavLink>
              <div className="absolute hidden px-2 py-1 text-white bg-[#111111] rounded-lg shadow-md group-hover:block">
                {/* Add your agent options here */}
                <a href="#" className="block py-1">
                  Agent 1
                </a>
                <a href="#" className="block py-1">
                  Agent 2
                </a>
                <a href="#" className="block py-1">
                  Agent 3
                </a>
                <a href="#" className="block py-1">
                  Agent 4
                </a>
              </div>
            </div>
            <NavLink to={'/maps'} className="text-white">MAPS</NavLink>
            <NavLink to={'guns'} className="text-white">GUNS</NavLink>
            <NavLink to={'/about'} className="text-white" >ABOUT US</NavLink>
          </div>
        )}

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul
            className="flex flex-col p-4 mt-4 font-medium border  rounded-lg md:p-0 
          md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-[#111111]
          md:bg-[#111111] border-gray-700 md:ml-5"
          >
            <li>
              <a
                href="/"
                className="block px-3 py-2 text-white bg-red-600 rounded md:bg-transparent md:p-0 md:hover:text-red-500"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li className="relative" ref={dropDownRef}>
              <NavLink to={'/agents'}
                onClick={handleAgentToggle}
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full px-3 py-2 text-white border-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto md:hover:text-red-500 focus:text-white hover:bg-gray-700"
              >
                AGENTS{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </NavLink>

              {showDropdown && (
                <div
                  id="dropdownNavbar"
                  className="absolute z-10 font-normal bg-[#111111] divide-y divide-gray-600 rounded-lg shadow w-44"
                >
                  <ul
                    className="py-2 text-sm text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li>
              <NavLink to={'/maps'}
                className="block px-3 py-2 text-white rounded md:border-0 md:p-0 md:hover:text-red-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                MAPS
              </NavLink>
            </li>
            <li>
              <NavLink to={'/guns'}
                className="block px-3 py-2 text-white rounded md:border-0 md:p-0 md:hover:text-red-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                GUNS
              </NavLink>
            </li>
            <li>
              <NavLink to={'/about'}
              
                className="block px-3 py-2 text-white rounded md:border-0 md:p-0 md:hover:text-red-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                ABOUT US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
