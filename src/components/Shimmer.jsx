import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-wrap gap-8">
        {Array(50)
          .fill("")
          .map((index) => (
            <div
              key={index} // dont use index as keys. Here we were not having any unique key so we used index
              className="shadow-lg w-72 h-72 rounded-lg animate-pulse"
            >
              <div className="w-72 h-[180px] rounded-lg bg-[#cccccc]"></div>
              <div className="px-5 leading-4 py-1">
                <h1 className="font-bold my-2 bg-[#cccccc] text-sm text-[#cccccc]">
                  Title
                </h1>
                <h1 className="font-semibold my-2 w-2/3 bg-[#cccccc] text-[#cccccc] text-sm">
                  ChannelTitle
                </h1>
                <h2 className="text-sm my-2 w-1/3 bg-[#cccccc] text-[#cccccc]">
                  Views
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
