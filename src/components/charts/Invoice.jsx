import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const Invoice = () => {
  const [data, setData] = useState([
    { name: "Older", value: 30 },
    { name: "Jan 01-08", value: 20 },
    { name: "Jan 09-16", value: 15 },
    { name: "Jan 17-24", value: 25 },
    { name: "Jan 25-31", value: 18 },
    { name: "Future", value: 40 },
  ]);

  const chartWidth = 900;
  const chartHeight = 200;

  const updateMonthNames = () => {
    const newMonthNames = data.map((item, index) => {
      if (index !== 0 && index !== data.length - 1) {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + (index - 1) * 7);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 7);
        return `${startDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}-${endDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}`;
      }
      return item.name;
    });

    setData((prevData) =>
      prevData.map((item, index) => ({ ...item, name: newMonthNames[index] }))
    );
  };

  useEffect(() => {
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", chartWidth)
      .attr("height", chartHeight);

    const updateChart = () => {
      // Update bars
      const bars = svg.selectAll("rect").data(data);

      bars
        .enter()
        .append("rect")
        .merge(bars)
        .attr("x", (d, i) => i * 60 + 10 + 40)
        .attr("y", (d) => chartHeight - d.value * 2 - 20)
        .attr("width", 20)
        .attr("height", (d) => d.value * 2)
        .attr("rx", 6) // Rounded corners
        .attr("ry", 10)
        .style("fill", "green");

      bars.exit().remove();

      const labels = svg.selectAll("text").data(data);

      labels
        .enter()
        .append("text")
        .merge(labels)
        .attr("x", (d, i) => i * 60 + 30 + 33)
        .attr("y", chartHeight - 2)
        .attr("text-anchor", "middle")
        .text((d) => d.name)
        .attr("font-size", "14px");

      labels.exit().remove();
    };

    updateChart();

    const interval = setInterval(() => {
      updateMonthNames();
      updateChart();
    }, 60000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div>
      <button
        style={{
          position: "absolute",
          top: 140,
          right: 70,
          padding: "10px 20px",
          backgroundColor: "lightgray",
          color: "blue",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        New Sales Invoice
      </button>
      <div id="chart" style={{ marginTop: "20px" }}></div>
    </div>
  );
};

export default Invoice;
