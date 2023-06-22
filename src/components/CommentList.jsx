import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  // DO NOT USE INDEX AS KEY. HERE WE DONT HAVE UNIQUE KEY SO WE ARE USING INDEX
  return comments?.map((comment, index) => (
    <div key={index} className="">
      <Comment data={comment} />
      <div className="px-6 ml-5">
        <CommentList comments={comment?.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
