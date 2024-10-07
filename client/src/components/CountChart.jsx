"use client";
import React from "react";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  // Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// Sample Data
const data = [
  {
    name: "Total",
    count: 125,
    fill: "white",
  },
  {
    name: "Boys",
    count: 75,
    fill: "#8884d8",
  },
  {
    name: "Girls",
    count: 50,
    fill: "pink",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl h-full w-full p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1>Student</h1>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
            <PolarAngleAxis tick={false} domain={[0, 100]} type="number" reversed />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* <Image src="maleFemale.png" alt="" height={20} width={30} className="absolute"/> */}
        <Image src="/maleFemale.png" alt="image" height={50} width={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center gap-16 mt-4">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 rounded-full bg-blue-200"></div>
          <h1 className="font-bold">1234</h1>
          <h1 className="text-xs text-gray-300">Category A</h1>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 rounded-full bg-pink-200"></div>
          <h1 className="font-bold">1234</h1>
          <h1 className="text-xs text-gray-300">Category B</h1>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
