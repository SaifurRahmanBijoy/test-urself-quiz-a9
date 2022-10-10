import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-slate-300 flex justify-around py-2">
      <div>
        <h1 className="text-slate-600 font-mono font-bold text-lg">Test Yourself</h1>
      </div>
      <div className="text-blue-600 font-serif">
        <a className="mx-3" href="/">Home</a>
        <a className="mx-3" href="/">Stats</a>
        <a className="mx-3" href="/">Blog</a>
      </div>
    </nav>
  );
};

export default Header;
