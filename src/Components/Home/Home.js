import React from "react";
import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Topic from "../Topic/Topic";

const Home = () => {
  const data = useLoaderData();
  const topics = data.data;

  return (
    <div>
      <About></About>
      <div className="grid md:grid-cols-2 my-8 gap-5 mx-auto w-1/2">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
