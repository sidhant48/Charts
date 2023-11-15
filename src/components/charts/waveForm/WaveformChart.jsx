import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import "./WaveformChart.css";

const WaveformChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedManageOption, setSelectedManageOption] = useState("Option1");
  const [data, setData] = useState(
    generateRandomData(selectedMonth, selectedManageOption)
  );

  useEffect(() => {
    const width = 500;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 50, left: 40 };

    d3.select("#waveform-chart svg").remove();

    const svg = d3
      .select("#waveform-chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.y), d3.max(data, (d) => d.y)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveCardinal);

    svg
      .append("path")
      .data([data])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 3);

    svg
      .selectAll(".x-axis-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "x-axis-label")
      .attr("x", (d) => xScale(d.x))
      .attr("y", height + margin.top + 20)
      .style("text-anchor", "middle")
      .text((d) => d.x + 9);

    svg
      .append("text")
      .attr("transform", `translate(${width / 2},${height + margin.top + 40})`)
      .style("text-anchor", "middle")
      .text("");
  }, [data]);

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
    setData(generateRandomData(selectedMonth, selectedManageOption));
  };

  const handleManageChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedManageOption(selectedOption);
    setData(generateRandomData(selectedMonth, selectedOption));
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: -50, right: 18 }}>
        <select
          id="manageOptionsDropdown"
          onChange={handleManageChange}
          value={selectedManageOption}
          className="custom-select"
        >
          <option value="Option1">Manage</option>
          <option value="Option2">Manage2</option>
          <option value="Option3">Manage3</option>
        </select>
        <select
          id="manageDropdown"
          onChange={handleMonthChange}
          value={selectedMonth}
          className="custom-select"
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div id="waveform-chart"></div>
    </div>
  );
};

const generateRandomData = (selectedMonth, selectedManageOption) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const selectedMonthIndex = months.indexOf(selectedMonth);

  const cycles = 3;
  const frequencyFactor = 2 * Math.PI * cycles;

  const phaseShift = (selectedMonthIndex * (2 * Math.PI)) / 12;

  let data = Array.from({ length: 10 }, (_, index) => ({
    x: index,
    y:
      Math.sin(index * frequencyFactor + phaseShift) *
      50 *
      (Math.abs(Math.sin(index * 0.5)) + 0.5),
  }));

  switch (selectedManageOption) {
    case "Option1":
      data = data.map((point) => ({
        x: point.x,
        y: point.y * 2,
      }));
      break;
    case "Option2":
      data = data.map((point) => ({
        x: point.x,
        y: point.y * 0.5,
      }));
      break;
    case "Option3":
      data = data.map((point) => ({
        x: point.x,
        y: Math.abs(point.y),
      }));
      break;

    default:
      break;
  }

  return data;
};

export default WaveformChart;
