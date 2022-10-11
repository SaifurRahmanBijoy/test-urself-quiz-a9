import React from "react";

const Option = ({ option }) => {
  //   console.log(option);
  const { key } = option;
  return (
    <div className="border-2 border-slate-300 p-2 text-sm rounded-md bg-slate-100 hover:bg-slate-300">
      <input type="radio" id={key} />
      <label className="ml-3" for="child">
        {option}
      </label>
    </div>
  );
};

export default Option;
