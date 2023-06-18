import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex justify-center items-center bg-[#161622] h-screen text-white">
      <h1 className="absolute text-5xl font-semibold">Page {err.statusText}</h1>
      <Link
        to="/"
        className="absolute top-[60%] bg-purple-700 rounded-lg font-semibold my-14 px-5 py-2"
      >
        Back to HomePage
      </Link>
      <h2 className="text-[25rem] font-bold text-slate-700 tracking-wider">
        {err.status}
      </h2>
    </div>
  );
};

export default ErrorPage;
