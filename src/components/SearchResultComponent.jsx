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
      <div className="flex my-5 2xl:my-5 xl:my-5 lg:my-4 md:my-3 sm:my-3 xs:my-3">
        <img
          src={data?.snippet?.thumbnails?.medium?.url}
          alt="VideoImage"
          className="rounded-lg 2xl:h-36 xl:h-36 lg:h-28 md:h-24 sm:h-20 xs:h-20"
        />
        <div className="mx-4">
          <div className="my-1 2xl:my-1 xl:my-1 lg:my-0 md:my-0 sm:my-0">
            <h1 className="font-bold 2xl:text-lg 2xl:leading-4 2xl:mb-1 xl:text-lg xl:leading-4 xl:mb-1 lg:text-md lg:leading-4 md:text-[12px] md:leading-4 sm:text-[9px] sm:leading-3 xs:leading-3 xs:text-[9px]">
              {data?.snippet?.title.length > 60
                ? data?.snippet?.title.substr(0, 60) + "..."
                : data?.snippet?.title}
            </h1>
            <p className="text-xs text-[#aaaaaa] dark:text-[#858585] 2xl:text-xs xl:text-xs lg:text-md md:text-[8.5px] sm:text-[6px] xs:text-[6px]">
              {calculateDuration(data?.snippet?.publishedAt)} ago
            </p>
          </div>
          <div className="flex text-[#606060] my-3 items-center dark:text-[#aaaaaa] dark:hover:text-white 2xl:my-3 xl:my-3 lg:my-2 md:my-1 sm:my-0 xs:my-0">
            <img
              src="https://yt3.ggpht.com/ytc/AGIKgqN1F5HXRCFl48NA5bwfOJsdLakGKcwyJrcZ31fkGQ=s48-c-k-c0x00ffffff-no-rj"
              alt="ChannelLogo"
              className="rounded-full w-5 h-5 bg-[#2c2c2c] 2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 sm:h-3 sm:w-3 xs:h-2 xs:w-2"
            />
            {/* <div className="rounded-full w-5 h-5 bg-[#2c2c2c] 2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 sm:h-3 sm:w-3"></div> */}
            <span className="text-xs font-medium px-1 2xl:text-xs xl:text-xs lg:text-xs md:text-[7px] sm:text-[7px] xs:text-[7px]">
              {data?.snippet?.channelTitle}
            </span>
          </div>
          <div>
            <h1 className="text-xs font-medium text-[#aaaaaa] 2xl:text-xs 2xl:block xl:text-xs xl:block lg:text-md lg:block md:text-[7px] md:block sm:hidden xs:hidden">
              {data?.snippet?.description}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultComponent;
