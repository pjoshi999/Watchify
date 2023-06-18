import React from "react";
import { Link } from "react-router-dom";

const SearchResultComponent = ({ data }) => {
  const calculateDuration = (date) => {
    const now = new Date();
    const inputDate = new Date(date);
    const diff = Math.abs(now - inputDate);
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
    const years = Math.floor(diff / millisecondsPerYear);
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)); // Average number of days per month
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    if (years >= 1) {
      return `${years} year${years > 1 ? "s" : ""}`;
    } else {
      if (months >= 1) {
        return `${months} month${months > 1 ? "s" : ""}`;
      } else {
        if (days >= 1) {
          return `${days} day${days > 1 ? "s" : ""}`;
        } else {
          if (hours >= 1) {
            return `${hours} hour${hours > 1 ? "s" : ""}`;
          } else {
            return `${minutes} minute${minutes > 1 ? "s" : ""}`;
          }
        }
      }
    }
  };

  return (
    <Link to={"/watch?v=" + data?.id?.videoId}>
      <div className="flex my-5">
        <img
          src={data?.snippet?.thumbnails?.medium?.url}
          alt="VideoImage"
          className="rounded-lg"
        />
        <div className="mx-4">
          <div className="my-1">
            <h1 className="font-bold">{data?.snippet?.title}</h1>
            <p className="text-xs text-[#aaaaaa] dark:text-[#858585]">
              {calculateDuration(data?.snippet?.publishedAt)} ago
            </p>
          </div>
          <div className="flex text-[#606060] my-3 items-center dark:text-[#aaaaaa] dark:hover:text-white">
            {/* <img src="/img/user.png" alt="Channel Logo" className="w-5 h-5" /> */}
            <div className="rounded-full w-5 h-5 bg-[#2c2c2c]"></div>
            <span className="text-xs font-medium px-1">
              {data?.snippet?.channelTitle}
            </span>
          </div>
          <div>
            <h1 className="text-xs font-medium text-[#aaaaaa]">
              {data?.snippet?.description}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultComponent;
