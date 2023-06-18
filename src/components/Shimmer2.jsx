import React from "react";

const Shimmer2 = () => {
  return (
    <div>
      {Array(8)
        .fill("")
        .map(() => (
          <div className="flex ml-28 my-5 mt-10 animate-pulse">
            <div className="rounded-lg bg-[#606060] animate-pulse h-40 w-80"></div>
            <div className="mx-4">
              <div className="my-1 w-[45rem]">
                <h1 className="font-bold bg-[#606060] text-[#606060] animate-pulse w-[45rem]">
                  Title
                </h1>
                <p className="text-xs w-[35rem] animate-pulse bg-[#606060] text-[#606060] dark:text-[#858585]">
                  {" "}
                </p>
              </div>
              <div className="flex animate-pulse bg-[#606060] text-[#606060] my-3 w-[35rem] items-center dark:text-[#858585] dark:hover:text-white">
                <div className="h-5 animate-pulse bg-[#606060] text-[#606060] w-[35rem]">
                  Channel Title
                </div>
                <span className="text-xs animate-pulse w-40 font-medium bg-[#606060] text-[#606060] px-1">
                  1 month ago
                </span>
              </div>
              <div>
                <h1 className="text-sm animate-pulse bg-[#606060] text-[#606060] w-60">
                  Description
                </h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer2;
