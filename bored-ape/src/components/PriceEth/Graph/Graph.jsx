import "./Graph.css";
import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Graph = ({ data01, data02, data03 }) => {
  return (
    <ResponsiveContainer>
      <ScatterChart
        height={400}
        margin={{
          top: 0,
          right: -40,
          left: -10,
        }}
      >
        <CartesianGrid vertical={false} width="10" />
        <XAxis type="number" dataKey="x" name="stature" unit="" />
        <YAxis
          yAxisId="left"
          type="number"
          dataKey="y"
          name="eth"
          unit=""
          stroke="#6E7191"
        />
        <YAxis
          yAxisId="right"
          type="number"
          dataKey="y"
          name="eth"
          unit=""
          orientation="right"
          stroke="#82ca9d"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter yAxisId="left" name="eth" data={data01} fill="#8775D0" />
        <Scatter yAxisId="left" name="eth" data={data02} fill="#80CCF4" />
        <Scatter yAxisId="left" name="eth" data={data03} fill="#98BBAF" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};
