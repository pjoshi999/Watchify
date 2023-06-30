import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const btnList = [
    "Music",
    "Gaming",
    "Scene",
    "Comedy",
    "Drama",
    "Fantasy",
    "Adventure",
    "Storyboard",
    "Romantic",
    "New to you",
    "Recently uploaded",
  ];

  return (
    <div className="w-full dark:bg-black">
      <div className="flex mx-8 pt-5 pb-2 gap-4">
        <button className="bg-black text-white dark:bg-[white] dark:text-black text-sm px-3 py-1 rounded-lg 2xl:inline-flex xl:inline-flex lg:hidden md:hidden sm:hidden">
          All
        </button>
        <div className="flex flex-wrap gap-4 2xl:inline-flex xl:inline-flex lg:inline-hidden md:hidden sm:hidden">
          {btnList.map((btn) => {
            return <ButtonList key={btn} btnName={btn} />;
          })}
        </div>
      </div>
      <div className="mx-8 py-5 2xl:mx-8 xl:mx-8 lg:mx-8 md:mx-8 sm:mx-0">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
