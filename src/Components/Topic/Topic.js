import React from "react";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
  return (
    <div className="bg-slate-200 m-2">
      <div>
        <img className="p-1 w-full" src={logo} alt="" />
      </div>
      <div>
        <div>
            <h1>{name}</h1>
            <p>Quiz: {total}</p>
        </div>
        <div>
            <button>Go on</button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
