import React, { PureComponent } from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#82ca9d" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" /> {}
          {grid && <CartesianGrid strokeDasharray="5 5" storke="#e0dfdf" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
