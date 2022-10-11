import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <form >
      <div className="bg-slate-200 px-3 py-6 mx-5 my-8">
        <div className="flex justify-around flex-col sm:flex-row">
          <h2 className="font-mono text-left sm:px-10 text-md bg-slate-50 py-2">
            {questionTitle}
          </h2>
          <ToastContainer position="top-center" autoClose={2000} theme="dark" />
          <FontAwesomeIcon onClick={showAnswer} className="hover:cursor-pointer flex items-center text-sm text-green-800 hover:text-green-400 my-2 rounded-sm" icon={faEye}></FontAwesomeIcon>
        </div>
        <div className="grid grid-cols-1 gap-3 mx-auto px-5 font-serif my-3">
          {options.map((option) => (
            <Option
              key={option}
              option={option}
              seeIfCorrect={seeIfCorrect}
            ></Option>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Question;
