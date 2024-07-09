import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/config";
import RecommendedVideo from "./RecommendedVideo";

const RecommendedVideosList = () => {
  const [recommended, setRecommended] = useState([]);

  const [params] = useSearchParams();
  const searchParams = params.get("v");

  useEffect(() => {
    getRecommendedVideos();
  }, [params]);

  const getRecommendedVideos = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=" +
        searchParams +
        "&type=video&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json);

    setRecommended(json?.items);
  };

  return (
    <div className="2xl:w-[26rem] 2xl:block xl:w-96 xl:block lg:w-80 md:hidden sm:hidden xs:hidden">
      {recommended?.map((video) => (
        <div className="py-2" key={video?.id?.videoId}>
          <RecommendedVideo data={video} />
        </div>
      ))}
    </div>
  );
};

export default RecommendedVideosList;
