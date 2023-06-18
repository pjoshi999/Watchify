import React from "react";

const RecommendedVideo = ({ data }) => {
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

  if (data === undefined) {
    return;
  }
  const { snippet } = data;
  const { channelTitle, title, publishedAt, thumbnails } = snippet;
  return (
    <div className="flex cursor-pointer">
      <img
        src={thumbnails?.medium?.url}
        alt=""
        className="w-40 rounded-lg h-20"
      />
      <div className="px-2">
        <h1 className="text-sm font-bold">{title.slice(0, 55)}</h1>
        <h1 className="text-xs text-[#606060] pt-1">{channelTitle}</h1>
        <h1 className="text-xs text-[#606060]">
          {calculateDuration(publishedAt)} ago
        </h1>
      </div>
    </div>
  );
};

export default RecommendedVideo;
