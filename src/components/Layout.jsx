import React from "react";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full bg-slat-300 py-3 px-5 text-slate-600">
        {children}
      </div>
    </div>
  );
};
