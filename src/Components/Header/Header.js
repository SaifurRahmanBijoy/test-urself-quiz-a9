import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-slate-300 flex flex-col md:flex-row justify-around py-2">
      <div className="flex justify-center">
        <h1 className="text-slate-600 font-mono font-bold text-lg">
          Test Yourself
        </h1>
      </div>
      <div className="text-blue-600 font-serif my-1 md:my-0 flex justify-center">
        <Link className="mx-3" to="/">
          Home
        </Link>
        <Link className="mx-3" to="/stats">
          Stats
        </Link>
        <Link className="mx-3" to="/blog">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Header;
