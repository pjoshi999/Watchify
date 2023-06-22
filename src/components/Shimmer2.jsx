import React from "react";

const Shimmer2 = () => {
  return (
    <div>
      {Array(15)
        .fill("")
        .map(() => (
          <div className="flex ml-28 my-5 mt-10 animate-pulse 2xl:my-5 2xl:ml-28 xl:my-5 xl:ml-24 lg:my-4 lg:ml-20 md:my-3 md:ml-16 sm:my-3 sm:ml-10 md:overflow-hidden">
            <div className="rounded-lg bg-[#606060] animate-pulse h-40 w-80 2xl:h-40 2xl:w-80 xl:h-36 xl:w-64 lg:h-28 lg:w-60 md:h-28 md:w-48 sm:h-28 sm:w-48 md:overflow-hidden sm:overflow-hidden"></div>
            <div className="mx-4">
              <div className="my-1">
                <h1 className="font-bold bg-[#606060] text-[#606060] animate-pulse w-[45rem] 2xl:text-lg 2xl:leading-4 2xl:mb-1 xl:text-lg xl:leading-4 xl:mb-1 lg:text-md lg:leading-4 md:text-[12px] md:leading-4 sm:text-[9px] sm:leading-3 2xl:w-[45rem] xl:w-[35rem] lg:w-[25rem] md:w-[25rem] sm:w-[25rem]">
                  Title
                </h1>
                <p className="text-xs w-[35rem] animate-pulse bg-[#606060] text-[#606060] dark:text-[#858585] 2xl:w-[25rem] xl:w-[20rem] lg:w-[15rem] md:w-[15rem] sm:w-[15rem]">
                  {" "}
                </p>
              </div>
              <div className="flex animate-pulse bg-[#606060] text-[#606060] my-3 w-[25rem] items-center dark:text-[#858585] dark:hover:text-white 2xl:w-[25rem] xl:w-[20rem] lg:w-[15rem] md:w-[15rem] sm:w-[10rem]">
                <div className="h-5 animate-pulse bg-[#606060] text-[#606060] w-[35rem] 2xl:w-[25rem] xl:w-[20rem] lg:w-[15rem] md:w-[10rem] sm:w-[15rem]">
                  Channel Title
                </div>
              </div>
              <div>
                <h1 className="text-sm animate-pulse bg-[#606060] text-[#606060] w-60 2xl:w-60 xl:w-48 lg:w-40 md:w-32 sm:w-32">
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
