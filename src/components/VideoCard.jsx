import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  let count = Math.floor(statistics?.viewCount / 1000000);
  return (
    <div className="shadow-lg w-72 rounded-lg cursor-pointer">
      <img src={thumbnails?.medium?.url} alt="" className="rounded-lg" />
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