import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Line
} from "recharts";

const Stats = () => {
  const data = useLoaderData();
  const topics = data.data;
  return (
    <div>
      <h2 className="text-center text-2xl font-thin text-yellow-700 my-2">The stats of quiz is given below:</h2>
      <div className="bg-slate-100 text-slate-50 w- flex justify-center mx-auto rounded-md py-4 shadow-inner">
        <LineChart
          className=""
          width={350}
          height={350}
          data={topics}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Stats;
