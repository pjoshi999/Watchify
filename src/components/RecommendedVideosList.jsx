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
  }, [searchParams]);

  const getRecommendedVideos = async () => {
    const url = `https://youtube138.p.rapidapi.com/video/related-contents/?id=${searchParams}&hl=en&gl=US`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9227d98b7dmshb7e4151144c553bp11a4e7jsnf24d7b0109c4",
        "x-rapidapi-host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setRecommended(result?.contents);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(recommended);

  return (
    <div className="2xl:w-[26rem] 2xl:block xl:w-96 xl:block lg:w-80 md:hidden sm:hidden xs:hidden">
      {recommended?.map((video) => (
        <div className="py-2" key={video?.video?.videoId}>
          <RecommendedVideo data={video} />
        </div>
      ))}
    </div>
  );
};

export default RecommendedVideosList;
