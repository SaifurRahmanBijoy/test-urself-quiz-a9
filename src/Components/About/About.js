import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100 mx-2 my-8 px-5 py-4 rounded-sm">
      <div className="flex justify-center items-center">
        <img
          className="w-28 md:52"
          src="https://play-lh.googleusercontent.com/2y0nslmQeGxBzCTcoaEZPSGkbAqWD4-5ESGUKAFSGatlNlVX1wL6aasMGCPEys_gRpw"
          alt=""
        />
      </div>
      <div className="text-slate-600 p-3 flex justify-center items-center w-full">
        <p>
          A quiz refers to a short test of knowledge, typically around 10
          questions in length, with question formats often including multiple
          choice, fill in the blanks, true or false and short answer. A quiz is
          much shorter than a traditional test or exam and is rarely impactful
          on a final course grade.
        </p>
      </div>
    </div>
  );
};

export default About;
