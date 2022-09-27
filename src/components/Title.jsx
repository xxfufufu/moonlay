import React from "react";
import { Link } from "react-router-dom";

export const Title = ({ title, path }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-5">
      <h1 className="text-slate-600 font-bold text-3xl">{title}</h1>
      <Link
        to={path}
        className="bg-blue-400 hover:bg-blue-600 text-slate-100 font-bold py-2 px-4 rounded"
      >{`Add ${title}`}</Link>
    </div>
  );
};
