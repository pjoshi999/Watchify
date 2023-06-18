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
    "Mantras",
  ];

  return (
    <div className="w-full">
      <div className="flex mx-8 pt-5 pb-2 gap-4">
        <button className="bg-black text-white dark:bg-[white] dark:text-black text-sm px-3 py-1 rounded-lg">
          All
        </button>
        {btnList.map((btn) => {
          return <ButtonList key={btn} btnName={btn} />;
        })}
      </div>
      <div className="mx-8 py-5">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
