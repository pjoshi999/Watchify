import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  let count = Math.floor(statistics?.viewCount / 1000000);
  return (
    <div className="shadow-lg w-72 rounded-lg cursor-pointer 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-screen xs:w-screen">
      <img
        src={thumbnails?.medium?.url}
        alt="Video-Img"
        className="rounded-lg object-fill w-[17rem] 2xl:rounded-lg xl:rounded-lg lg:rounded-lg md:rounded-lg sm:rounded-none xs:rounded-none 2xl:w-[17rem] xl:w-[17rem] lg:w-[17rem] md:w-[17rem] sm:w-screen xs:w-screen"
      />
      <div className="px-4 leading-4 py-1"> 
        <h1 className="font-bold text-sm">{title}</h1>
        <h1 className="font-medium pt-1 text-sm">{channelTitle}</h1>
        <h2 className="text-sm pb-2">
          {count === 0
            ? (count = Math.floor(statistics?.viewCount / 1000) + "K views")
            : count + "M views"}
        </h2>
      </div>
    </div>
  );
};

export default VideoCard;
