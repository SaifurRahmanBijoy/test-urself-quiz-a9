import React from "react";

const Option = ({ option, seeIfCorrect }) => {
  return (
    <div className="border-2 border-slate-300 p-2 text-sm rounded-md bg-slate-100 hover:bg-slate-300">
      <input onClick={() => seeIfCorrect(option)} type="radio" id={option} />
      <label className="ml-3" for={option}>
        {option}
      </label>
    </div>
  );
};

export default Option;
