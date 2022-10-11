import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-slate-300 flex flex-col md:flex-row justify-around py-2 shadow-inner">
      <div className="flex justify-center">
        <h1 className="text-slate-600 font-mono font-bold text-xl">
          Test Yourself
        </h1>
      </div>
      <div className="text-green-800 font-serif my-1 md:my-0 flex justify-center">
        <Link className="hover:text-red-600 mx-3" to="/">
          Home
        </Link>
        <Link className="hover:text-red-600 mx-3" to="/stats">
          Stats
        </Link>
        <Link className="hover:text-red-600 mx-3" to="/blog">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Header;
