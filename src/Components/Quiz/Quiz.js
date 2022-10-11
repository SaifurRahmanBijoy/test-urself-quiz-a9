import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const data = useLoaderData();
  const questions = data.data.questions;
  return (
    <div>
      {questions.map((question) => (
        <Question key={question.id} question={question}></Question>
      ))}
    </div>
  );
};

export default Quiz;
