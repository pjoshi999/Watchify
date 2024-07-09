import React from "react";
import { Link } from "react-router-dom";

const RecommendedVideo = ({ data }) => {
  return (
    <Link to={"/watch?v=" + data?.video?.videoId}>
      <div className="flex cursor-pointer">
        <img
          src={data?.video?.thumbnails[1]?.url}
          alt=""
          className="w-40 rounded-lg"
        />
        <div className="px-2">
          <h1 className="text-sm font-bold">
            {data?.video?.title.slice(0, 55)}
          </h1>
          <h1 className="text-xs text-[#606060] pt-1">
            {data?.video?.author?.title}
          </h1>
          <h1 className="text-xs text-[#606060]">
            {data?.video?.publishedTimeText}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default RecommendedVideo;
