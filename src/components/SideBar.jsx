import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu, toggleMenu } from "../utils/appSlice";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const closeMenuToggle = () => {
    dispatch(closeMenu());
  };

  const openMenuToggle = () => {
    dispatch(toggleMenu());
  };

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div
      className={`pl-4 py-5 w-56 text-sm dark:bg-black dark:text-white 2xl:${() =>
        openMenuToggle()} 2xl:relative xl:${() =>
        openMenuToggle()} xl:relative lg:${() =>
        openMenuToggle()} lg:relative md:${() =>
        openMenuToggle()} md:relative sm:${() =>
        closeMenuToggle()} sm:absolute`}
    >
      <ul className="font-bold mb-1">
        <li className="bg-[#e3e3e3] dark:bg-[#272727] dark:text-white cursor-pointer rounded-md py-2">
          <Link to="/">
            <i className="fa fa-home px-4"></i>Home
          </Link>
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-play px-4" aria-hidden="true"></i>Shorts
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-shopping-cart px-4" aria-hidden="true"></i>
          Subscriptions
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-film px-4" aria-hidden="true"></i>Movies
        </li>
      </ul>
      <hr className="bg-[#3f3f3f]" />
      <ul className="font-bold my-2">
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-film px-4" aria-hidden="true"></i>Library
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-history px-4"></i>History
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-play px-4" aria-hidden="true"></i>Your Videos
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-clock-o px-4" aria-hidden="true"></i>Watch later
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-thumbs-o-up px-4" aria-hidden="true"></i>Liked
          Videos
        </li>
      </ul>
      <hr />
      <ul className="my-2">
        <h1 className="font-bold my-2">Subscription</h1>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-music px-[1.05rem]" aria-hidden="true"></i>Music
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-gamepad px-4" aria-hidden="true"></i>Sports
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-gamepad px-4" aria-hidden="true"></i>Gaming
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-film px-4" aria-hidden="true"></i>Movies
        </li>
      </ul>
      <hr />
      <h1 className="font-bold mt-2">Explore</h1>
      <ul className="my-2">
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-music px-[1.1rem]" aria-hidden="true"></i>Music
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 px-4 dark:hover:bg-[#272727] dark:text-white">
          <span>🔥</span>
          <span className="pl-2"> Trending</span>
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-shopping-cart px-4" aria-hidden="true"></i>
          Shopping
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-microphone px-5" aria-hidden="true"></i>
          Live
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-gamepad px-4" aria-hidden="true"></i>Gaming
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-newspaper-o px-4" aria-hidden="true"></i>News
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-gamepad px-4" aria-hidden="true"></i>Sports
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-graduation-cap pl-4 pr-3" aria-hidden="true"></i>
          Learning
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-shopping-bag px-4" aria-hidden="true"></i>
          Fashion & Beauty
        </li>
      </ul>
      <hr />
      <h1 className="font-bold mt-2">More from YouTube</h1>
      <ul className="my-2">
        <li className="hover:bg-[#e3e3e3] px-4 text-sm cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          YouTube Premium
        </li>
        <li className="hover:bg-[#e3e3e3] px-4 text-sm cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          YouTube Studio
        </li>
        <li className="hover:bg-[#e3e3e3] px-4 text-sm cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          YouTube Music
        </li>
        <li className="hover:bg-[#e3e3e3] px-4 text-sm cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          YouTube Kids
        </li>
      </ul>
      <hr />
      <ul className="font-bold my-2">
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-cog px-4" aria-hidden="true"></i>Settings
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-bug px-4" aria-hidden="true"></i>Report
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-question-circle px-4" aria-hidden="true"></i>Help
        </li>
        <li className="hover:bg-[#e3e3e3] cursor-pointer rounded-md py-2 dark:hover:bg-[#272727] dark:text-white">
          <i className="fa fa-commenting px-4" aria-hidden="true"></i>Send
          Feedback
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
