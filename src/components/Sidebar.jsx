import React from "react";
import { Link } from "react-router-dom";
import { menus } from "../constans/menus";

export const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-400 w-80 p-3">
      <div className="text-slate-100 text-3xl font-bold border-2 rounded text-center mb-3 hover:bg-slate-300">
        <Link to="/">Moonlay</Link>
      </div>
      {menus.map((item, index) => (
        <Link
          to={item.path}
          className="py-2 px-1 flex gap-x-2 font-semibold text-slate-100 hover:bg-slate-300 rounded"
          key={index}
        >
          <div className="w-5 h-5">{item.icon}</div>
          <div to={item.path}>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};
