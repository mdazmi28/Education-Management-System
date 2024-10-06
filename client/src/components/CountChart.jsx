"use client";
import React from "react";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarRadiusAxis,
  PolarAngleAxis,
} from "recharts";

const data = [
  {
    name: "18-24",
    uv: 18,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 31,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 35.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 45.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 51.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknown",
    uv: 99.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

//   const style = {
//     top: 0,
//     left: 350,
//     lineHeight: "24px",
//   };

const CountChart = () => {
  return (
    <div>
      {/* Title */}
      <div>
        <h1>Student</h1>
        <Image/>
      </div>
      {/* Chart */}
      <div>
        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}
        >
          <RadialBar
            // minAngle={15}
            // label={{ position: "insideStart", fill: "#fff" }}
            background
            // clockWise
            dataKey="uv"
            // max
          />
          <PolarAngleAxis
            tick={false}
            domain={[0, 100]}
            type="number"
            // @ts-expect-error this prop works but isn't correct in TS types
            reversed
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </div>
      {/* Bottom */}
      <div></div>
    </div>
  );
};

export default CountChart;
