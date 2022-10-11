import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-200 mx-8 my-8 px-5 py-4 rounded-sm shadow-xl border-4 border-gray-200">
      <div className="flex justify-center items-center">
        <img
          className="w-28 md:52"
          src="https://play-lh.googleusercontent.com/2y0nslmQeGxBzCTcoaEZPSGkbAqWD4-5ESGUKAFSGatlNlVX1wL6aasMGCPEys_gRpw"
          alt=""
        />
      </div>
      <div className="text-slate-600 font-serif p-3 flex justify-center items-center w-full">
        <p className="text-justify">
          A quiz is a quick and informal assessment of student knowledge.
          Quizzes are often used in North American higher education environments
          to briefly test a students’ level of comprehension regarding course
          material, providing teachers with insights into student progress and
          any existing knowledge gaps. A quiz is much shorter than a traditional
          test or exam and is rarely impactful.
        </p>
      </div>
    </div>
  );
};

export default About;
