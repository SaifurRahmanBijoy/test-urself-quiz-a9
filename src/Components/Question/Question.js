import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Option from "../Option/Option";
//--->
const Question = ({ question }) => {
  let questionTitle = question.question;
  questionTitle = questionTitle.split("<p>").join("");
  questionTitle = questionTitle.split("</p>").join("");
  //--->
  const options = question.options;
  console.log(question);
  //--->
  const seeIfCorrect = (option) => {
    if (option === question.correctAnswer) {
      toast.info("Answer is correct!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    } else {
      toast.warning("Answer is wrong!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };
  //--->
  const showAnswer = () => {
    const answer = question.correctAnswer;
    toast.info(answer, {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };
  //--->
  return (
    <div className="bg-slate-200 px-3 py-2 mx-5 my-8">
      <div className="flex justify-around flex-col sm:flex-row">
        <h2 className="font-mono text-left sm:px-10 text-md bg-slate-50 py-2">
          {questionTitle}
        </h2>
        <ToastContainer position="top-center" autoClose={2000} theme="dark" />
        <button
          onClick={showAnswer}
          className="text-sm text-slate-600 bg-green-300 hover:bg-orange-500 hover:text-slate-300 px-2 rounded-sm shadow-inner"
        >
          See Answer
        </button>
        <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      </div>
      <div className="grid grid-cols-1 gap-3 mx-auto px-5 font-serif my-3">
        {options.map((option) => (
          <Option
            key={question.id}
            option={option}
            seeIfCorrect={seeIfCorrect}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
