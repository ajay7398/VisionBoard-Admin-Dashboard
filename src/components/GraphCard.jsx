import React from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { FaClockRotateLeft } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";

function GraphCard({ item }) {
  return (
    <div className="bg-white rounded-2xl my-5 shadow-md   w-full">
      {/* Chart Area */}
      <div className={`h-60 ${item.background} w-[90%] mx-auto -mt-6 rounded-xl pr-3  py-5 z-50`}>
        <ResponsiveContainer width="100%" height="100%">
          {item.chartType === "bar" ? (
            <BarChart data={item.chartData} className="opacity-60">
              <XAxis dataKey="name" stroke="#ffffffaa" />
              <YAxis stroke="#ffffffaa" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#ffffff" radius={[5, 5, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={item.chartData} className="opacity-60">
              <XAxis dataKey="name" stroke="#ffffffaa" />
              <YAxis stroke="#ffffffaa" />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="value" stroke="#ffffff" strokeWidth={2} dot={{ fill: "#ffffff" }} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Title and Description */}
      <div className="p-4">
        <h3 className="text-gray-700 font-bold text-lg ">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>
 <div className="h-[1px] opacity-10 w-full my-6 bg-gradient-to-r from-transparent via-black to-transparent rounded-4xl" />
      {/* Footer */}
      <div className="flex items-center gap-2 text-sm text-gray-400 p-4 pt-0">
        {item.footerIcon === "clock" && <FaClockRotateLeft />}
        {item.footerIcon === "refresh" && <TbReload />}
        <span>{item.footer}</span>
      </div>
    </div>
  );
}

export default GraphCard;


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black  text-white p-2 rounded shadow text-sm">
        <p className="font-bold">{label}</p>
        <p>Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};
