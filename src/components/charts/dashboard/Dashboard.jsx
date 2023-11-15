import React from "react";
import WaveformChart from "../waveForm/WaveformChart";
import BarChart from "../barchart/BarChart";
import WatchList from "../WatchList";
import Invoice from "../Invoice";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="chart-window">
        <h4 color="black">Checking account</h4>
        <hr />
        <WaveformChart />
      </div>
      <div className="chart-window">
        <h4>Invoices owned to you</h4>
        <hr />
        <Invoice />
      </div>
      <div className="chart-window">
        <h4>Total cash flow</h4>
        <hr />
        <BarChart />
      </div>
      <div className="chart-window">
        <h4>Account watchlist</h4>
        <hr />
        <WatchList />
      </div>
    </div>
  );
};

export default Dashboard;
