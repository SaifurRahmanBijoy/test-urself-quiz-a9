import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
  return (
    <div className="bg-slate-200 rounded-md">
      <div>
        <img className="p-2 bg-slate-300 w-full" src={logo} alt="" />
      </div>
      <div className="flex justify-between mx-2 my-2">
        <div className="sm:ml-3">
          <h1 className="sm:text-xl text-slate-600 font-mono">{name}</h1>
          <p className="font-semibold text-slate-600">
            Quiz Available: {total}
          </p>
        </div>
        <div className="flex items-center sm:mr-3">
          <Link to='/quiz'>
            <button className="bg-blue-600 px-3 py-1 text-slate-300 rounded-sm">
              Go on
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
