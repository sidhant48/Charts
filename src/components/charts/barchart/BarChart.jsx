import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import "./BarChart.css";

const BarChart = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const generateRandomData = () => {
    return months.map((month) => ({
      month,
      value: Math.floor(Math.random() * 100) + 1,
    }));
  };

  const [data, setData] = useState(generateRandomData());

  useEffect(() => {
    const width = 500;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    const svg = d3.select("#bar-chart");

    const xScale = d3
      .scaleBand()
      .domain(months)
      .range([margin.left, width - margin.right + 70])
      .padding(0.7);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height - margin.bottom, margin.top]);

    svg.selectAll("*").remove();

    const gradient = svg
      .append("linearGradient")
      .attr("id", "bar-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", yScale(0))
      .attr("x2", 0)
      .attr("y2", yScale(d3.max(data, (d) => d.value)));

    gradient.append("stop").attr("offset", "0%").attr("stop-color", "green");

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "turquoise");

    svg
      .selectAll(".gradient-bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "gradient-bar")
      .attr("x", (d) => xScale(d.month))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - margin.bottom - yScale(d.value))
      .style("fill", "url(#bar-gradient)")
      .attr("rx", 5)
      .attr("ry", 5);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom + 10})`)
      .call((g) => g.selectAll(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .selectAll(".tick text")
      .data(months)
      .enter()
      .append("text")
      .attr("x", (d) => xScale(d) + xScale.bandwidth() / 2)
      .attr("y", 10)
      .style("text-anchor", "middle")
      .text((d) => d);

    svg
      .selectAll(".tick text")
      .data(months)
      .text((d) => d);

    svg.select(".y-axis").remove();
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="legend-container">
      <div className="legend-box turquoise"></div>
      <div className="legend-label">In</div>

      <div className="legend-box green"></div>
      <div className="legend-label">Out</div>

      <svg id="bar-chart" width="700" height="250"></svg>
    </div>
  );
};

export default BarChart;
