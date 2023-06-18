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
  }, []);

  const getRecommendedVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=" +
        searchParams +
        "&type=video&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setRecommended(json?.items);
  };

  return (
    <div>
      {recommended?.map((video) => (
        <div className="py-2" key={video?.id?.videoId}>
          <a href={"/watch?v=" + video?.id?.videoId} className="scroll-smooth">
            <RecommendedVideo data={video} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default RecommendedVideosList;
