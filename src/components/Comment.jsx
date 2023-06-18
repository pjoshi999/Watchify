import React from "react";

const Comment = ({ data }) => {
  const { name, text, url } = data;
  return (
    <div className="flex my-3">
      <img
        src={url}
        alt=""
        className="w-8 h-8 mt-[0.20rem] rounded-full cursor-pointer"
      />
      <div className="pl-3">
        <h1 className="font-bold text-sm">{name}</h1>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
