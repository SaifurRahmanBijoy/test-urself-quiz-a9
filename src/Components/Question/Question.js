import React from "react";
import Option from "../Option/Option";

const Question = ({ question }) => {
  let questionTitle = question.question;
  questionTitle = questionTitle.split("<p>").join("");
  questionTitle = questionTitle.split("</p>").join("");

  const options = question.options;
  console.log(question);

  const showAnswer = () => {
    return (question.correctAnswer);
  };

  return (
    <div className="bg-slate-200 px-3 py-2 mx-5 my-8">
      <div className="flex justify-around flex-col sm:flex-row">
        <h2 className="font-mono text-left sm:px-10 text-md bg-slate-50 py-2">
          {questionTitle}
        </h2>
        <button onClick={showAnswer} className="text-sm text-slate-600 bg-green-300 px-2 rounded-sm shadow-inner">
          See Answer
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 mx-auto px-5 font-serif my-3">
        {options.map((option) => (
          <Option key={question.id} option={option}></Option>
        ))}
      </div>
      <div>
        <h1>Correct Answer: <span>{showAnswer}</span></h1>
      </div>
    </div>
  );
};

export default Question;
