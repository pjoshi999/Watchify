import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/config";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(30);

  useEffect(() => {
    getVideos();
  }, [page]);

  const getVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=" +
        page +
        "&regionCode=IN&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setVideos((prev) => [...prev, ...json?.items]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const handleInfiniteScroll = () => {
    // console.log("Height: " + document.documentElement.scrollHeight);
    // console.log("Top: " + document.documentElement.scrollTop);
    // console.log("Window: " + window.innerHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      // You can add Shimmer here before setPage
      setPage((prev) => prev + 10);
    }
  };

  // console.log(videos);
  return !videos || videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center">
      <div className="grid gap-10 grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
        {videos.map((video, index) => (
          <Link key={index} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
