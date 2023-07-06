import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_URL } from "../utils/config";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import useDarkMode from "../utils/useDarkMode";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const [hideProfileSection, setHideProfileSection] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const [colorTheme, setTheme] = useDarkMode();
  // console.log(localStorage.theme);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  // Suggestion
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        searchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery);
    const json = await data.json();
    setShowSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClick = (s) => {
    setSearchQuery(s);
    setTimeout(() => {
      setHideSuggestions(true);
    }, 200);
  };

  return (
    <div className="flex justify-between items-center px-5 py-2 shadow-lg dark:bg-black dark:text-white">
      <div className="flex items-center">
        <i
          className="fa fa-bars fa-lg cursor-pointer text-black dark:text-white"
          aria-hidden="true"
          onClick={() => toggleMenuHandler()}
        ></i>
        {colorTheme === "light" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
          <Link to="/">
            <img
              src="/img/watchify-dark.png"
              alt="Theme"
              className="h-16 pl-2 scroll-smooth 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-3 xs:mt-3 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-48 xs:w-48"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src="/img/watchify-light.png"
              alt="Theme"
              className="h-16 pl-2 scroll-smooth"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Link>
        )}
      </div>
      <div>
        <div className="flex">
          <form action={"/search/" + searchQuery} className="flex">
            <input
              type="text"
              placeholder="Search"
              className="border-[1px] border-black px-4 py-[0.40rem] w-[30rem] rounded-l-full focus:outline-black dark:outline-none dark:bg-[#272727] dark:text-white 2xl:w-[30rem] xl:w-96 lg:w-64 md:w-64 sm:w-36 xs:w-20 2xl:rounded-r-none xl:rounded-r-none lg:rounded-r-none md:rounded-r-none sm:rounded-r-full xs:rounded-r-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setHideSuggestions(true)}
              onBlur={() => setHideSuggestions(true)}
            />
            <Link
              to={"/search/" + searchQuery}
              className="rounded-r-full bg-black text-white dark:bg-[#272727] dark:text-white text-center px-4 py-[0.60rem] flex items-center 2xl:block xl:block lg:block md:block sm:hidden xs:hidden"
            >
              <img
                src="/img/search.png"
                alt="Search Icon"
                className="h-[1.15rem] xs:h-4"
              />
            </Link>
          </form>
        </div>

        {hideSuggestions && showSuggestions.length > 0 && (
          <ul className="bg-white text-black py-1 w-[30rem] absolute rounded-3xl border-2 border-gray-200">
            {showSuggestions?.map((s) => (
              <li
                key={s}
                className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSearchClick(s)}
              >
                <i className="fa fa-search pr-2"></i>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <div className="flex items-center">
          <div
            className="px-5 cursor-pointer 2xl:block xl:block lg:block md:block sm:hidden xs:hidden"
            onClick={() => setIsDark(!isDark)}
          >
            {colorTheme === "light" ||
            (!("theme" in localStorage) &&
              window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
              <img
                src="/img/light-dark2.png"
                alt="Theme"
                className="h-5 ml-1 mr-2 bg-white rounded-full"
              />
            ) : (
              <img
                src="/img/light-dark.png"
                alt="Theme"
                className="h-5 pl-1 pr-2"
              />
            )}
          </div>

          {isDark && (
            <div className="border border-black rounded-lg absolute bg-white dark:bg-[#272727] end-16 mt-32">
              <ul className="">
                <li
                  className="flex px-2 hover:bg-[#e6e6e6] py-1 cursor-pointer dark:bg-[#272727]"
                  onClick={() => {
                    // localStorage.theme = "light";
                    // window.location.reload();
                    setTheme("light");
                  }}
                >
                  <img src="/img/light.png" alt="" className="h-6 px-1" />
                  Light
                </li>
                <li
                  className="flex px-2 hover:bg-[#e6e6e6] py-1 cursor-pointer dark:bg-[#272727]"
                  onClick={() => {
                    // localStorage.theme = "dark";
                    // window.location.reload();
                    setTheme("dark");
                  }}
                >
                  {colorTheme === "light" ||
                  (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)")
                      .matches) ? (
                    <img src="/img/dark2.png" alt="" className="h-6 px-1" />
                  ) : (
                    <img src="/img/dark.png" alt="" className="h-6 px-1" />
                  )}
                  Dark
                </li>
                <li
                  className="flex px-2 hover:bg-[#e6e6e6] py-1 cursor-pointer dark:bg-[#272727]"
                  onClick={() => {
                    // localStorage.removeItem("theme");
                    setTheme(null);
                    window.location.reload();
                  }}
                >
                  {colorTheme === "light" ||
                  (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)")
                      .matches) ? (
                    <img
                      src="/img/light-dark2.png"
                      alt="Theme"
                      className="h-5 ml-1 mr-2 bg-white rounded-full"
                    />
                  ) : (
                    <img
                      src="/img/light-dark.png"
                      alt="Theme"
                      className="h-5 pl-1 pr-2"
                    />
                  )}
                  System Preference
                </li>
              </ul>
            </div>
          )}

          <img
            src="/img/profile.jpg"
            alt="user"
            className="h-8 rounded-full cursor-pointer"
            onClick={() => setHideProfileSection(!hideProfileSection)}
          />
          {hideProfileSection && (
            <div className="bg-white dark:bg-[#272727] dark:text-white p-3 w-72 mt-[36.5rem] rounded-lg dark:rounded-lg absolute end-3">
              <div className="flex items-center mb-2">
                <img
                  src="/img/profile.jpg"
                  alt="user"
                  className="h-8 rounded-full"
                />
                <div className="px-2">
                  <h1>Priyanshu Joshi</h1>
                  <a href="/" className="text-[#3da0f6] font-semibold">
                    <span className="text-sm">Manage your Google Account</span>
                  </a>
                </div>
              </div>
              <hr />
              <ul className="my-2">
                <li className="py-1">Your Channel</li>
                <li className="py-1">Youtube Studio</li>
                <li className="py-1">Switch Account</li>
                <li className="py-1">Sign out</li>
              </ul>
              <hr />
              <ul className="my-2">
                <li className="py-1">Purchases and memberships</li>
                <li className="py-1">Your data in Youtube</li>
              </ul>
              <hr />
              <ul className="my-2">
                <li>
                  <span className="">Appearance: </span>
                  {localStorage.theme === "dark" ||
                  (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
                    ? "Dark"
                    : "Light"}
                </li>
                <li className="py-1">Language: English</li>
                <li className="py-1">Location: India</li>
              </ul>
              <hr />
              <ul className="my-2">
                <li className="py-1">Settings</li>
              </ul>
              <hr />
              <ul className="my-2">
                <li className="py-1">Help</li>
                <li className="pt-1">Send feedback</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
