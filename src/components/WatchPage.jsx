import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import RecommendedVideosList from "./RecommendedVideosList";
import { GOOGLE_API_KEY } from "../utils/config";

const WatchPage = () => {
  const [video, setVideo] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [params] = useSearchParams(); // we cannot use useParams() because in our url, out parameter is not after '/', they are after ?, which are search parameters. So we have to use useSearchParams(). And we can get particular parameter by using .get("param").
  const searchParam = params.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetail();
  }, []);

  const getVideoDetail = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        searchParam +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setVideo(json.items[0]);
  };

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

  let count = Math.floor(video?.statistics?.viewCount / 1000000);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="py-5 px-24 w-full dark:bg-black dark:text-white 2xl:px-24 xl:px-16 lg:px-20 md:px-5 sm:px-5">
      <div className="flex justify-between w-full">
        <iframe
          // width="885"
          // height="498"
          className="w-[55.3rem] h-[31.1rem] 2xl:w-[55.3rem] 2xl:h-[31.1rem] xl:w-[55.3rem] xl:h-[31.1rem] lg:w-[55.3rem] lg:h-[31.1rem] md:w-[55.3rem] md:h-[27.6rem] sm:h-[24.1rem]"
          src={"https://www.youtube.com/embed/" + searchParam + "?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="2xl:w-[26rem] 2xl:block xl:w-96 xl:block lg:w-80 md:hidden sm:hidden">
          <LiveChat />
        </div>
      </div>
      <div className="flex justify-between w-full mb-5 mt-2">
        <div className="w-[55.3rem]">
          <div>
            <h1 className="text-lg font-bold">{video?.snippet?.title}</h1>
          </div>
          <div className="flex my-3 justify-between items-center">
            <div className="flex">
              <img
                src="https://yt3.ggpht.com/ytc/AGIKgqN1F5HXRCFl48NA5bwfOJsdLakGKcwyJrcZ31fkGQ=s48-c-k-c0x00ffffff-no-rj"
                alt=""
                className="w-9 h-9 cursor-pointer rounded-full"
              />
              <div className="mx-2 leading-3 flex">
                <div>
                  <h1 className="text-sm font-bold">
                    {video?.snippet?.channelTitle}
                  </h1>
                  <span className="text-xs text-[#606060] dark:text-[#aaaaaa]">
                    150M subscribers
                  </span>
                </div>
                <button
                  className={`mx-5 ${
                    isSubscribed
                      ? "bg-white text-black border-2 border-black dark:bg-[#272727] dark:text-white"
                      : "bg-black text-white dark:bg-white dark:text-black"
                  } text-sm rounded-full px-3 py-1`}
                  onClick={() => setIsSubscribed(!isSubscribed)}
                >
                  {isSubscribed ? (
                    <>
                      <i className="fa fa-bell-o" aria-hidden="true"></i>
                      <span className="font-medium px-2">Subscribed</span>
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
            </div>
            <div className="flex 2xl:flex xl:flex lg:flex md:hidden sm:hidden">
              <div className="mx-1">
                <button className="px-3 py-1 rounded-l-full bg-[#f2f2f2] hover:bg-[#e2e0e0] border-r border-r-[#c2bdbd] dark:bg-[#272727] dark:hover:bg-[#3d3d3d]">
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </button>

                <button className="px-3 py-1 rounded-e-full bg-[#f2f2f2] hover:bg-[#e2e0e0] dark:bg-[#272727] dark:hover:bg-[#3d3d3d]">
                  <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                </button>
              </div>
              <button className="px-3 py-1 rounded-full mx-1 bg-[#f2f2f2] hover:bg-[#e2e0e0] dark:bg-[#272727] dark:hover:bg-[#3d3d3d]">
                <i className="fa fa-share" aria-hidden="true"></i>
                <span className="px-1 text-sm font-medium">Share</span>
              </button>
              <button className="px-3 py-1 rounded-full mx-1 bg-[#f2f2f2] hover:bg-[#e2e0e0] dark:bg-[#272727] dark:hover:bg-[#3d3d3d]">
                <i className="fa fa-download" aria-hidden="true"></i>
                <span className="px-1 text-sm font-medium">Download</span>
              </button>
              <button className="px-3 py-1 rounded-full mx-1 bg-[#f2f2f2] hover:bg-[#e2e0e0] dark:bg-[#272727] dark:hover:bg-[#3d3d3d]">
                <i className="fa fa-scissors" aria-hidden="true"></i>
                <span className="px-1 text-sm font-medium">Clip</span>
              </button>
              <button className="px-3 py-1 rounded-full mx-1 bg-[#f2f2f2] hover:bg-[#e2e0e0] dark:bg-[#272727] dark:hover:bg-[#3d3d3d]">
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div className="px-3 py-2 pb-3 bg-[#f2f2f2] text-sm rounded-xl my-5 dark:bg-[#272727] dark:text-white">
            <h1 className="font-medium">
              {count === 0
                ? (count =
                    Math.floor(video?.statistics?.viewCount / 1000) +
                    "K views ")
                : count + "M views "}
              {calculateDuration(video?.snippet?.publishedAt)} ago
            </h1>
            <p>
              {video?.snippet?.description.length > 500
                ? video?.snippet?.description.substr(0, 500) + "..."
                : video?.snippet?.description}
              <br />
            </p>
          </div>

          <div className="">
            <h1 className="text-lg font-bold">Comments</h1>
            <CommentContainer />
          </div>
        </div>
        <div className="">
          <RecommendedVideosList />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
