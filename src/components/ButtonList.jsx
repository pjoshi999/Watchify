import React from "react";

const ButtonList = ({ btnName }) => {
  return (
    <div>
      <button className="bg-[#e3e3e3] dark:bg-[#272727] dark:text-white text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 text-sm rounded-lg">
        {btnName}
      </button>
    </div>
  );
};

export default ButtonList;
