import React from "react";

const Option = ({ option, seeIfCorrect }) => {
  return (
    <div className="border-2 border-slate-300 py-2 px-4 text-sm rounded-sm bg-slate-100 hover:bg-yellow-200 mx-4 ">
      <h1 className="hover:cursor-pointer" onClick={() => seeIfCorrect(option)}>{option}</h1>
    </div>
  );
};

export default Option;
