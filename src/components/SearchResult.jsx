import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/config";
import { useParams } from "react-router-dom";
import SearchResultComponent from "./SearchResultComponent";
import Shimmer2 from "./Shimmer2";

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const { query } = useParams();
  const [page, setPage] = useState(10);

  useEffect(() => {
    getResults();
  }, [page]);

  const getResults = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=" +
        page +
        "&type=video&key=" +
        GOOGLE_API_KEY +
        "&q=" +
        query
    );
    const json = await data.json();
    setResults((prev) => [...prev, ...json?.items]);
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

  return !results || results.length === 0 ? (
    <Shimmer2 />
  ) : (
    <div className="px-28 py-8">
      {results.map((video) => {
        return <SearchResultComponent key={video.id.videoId} data={video} />;
      })}
    </div>
  );
};

export default SearchResult;

// For Infinite Scroll - https://youtu.be/ahpbfQybX94
