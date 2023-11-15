import React, { useState, useEffect } from "react";

const WatchList = () => {
  const generateRandomData = () => {
    return [
      {
        account: "Sales",
        thisMonth: +(Math.random() * 1000).toFixed(2),
        ytd: +(Math.random() * 5000).toFixed(2),
      },
      {
        account: "Advertising",
        thisMonth: +(Math.random() * 1000).toFixed(2),
        ytd: +(Math.random() * 5000).toFixed(2),
      },
      {
        account: "Inventory",
        thisMonth: +(Math.random() * 1000).toFixed(2),
        ytd: +(Math.random() * 5000).toFixed(2),
      },
      {
        account: "Entertainment",
        thisMonth: +(Math.random() * 1000).toFixed(2),
        ytd: +(Math.random() * 5000).toFixed(2),
      },
      {
        account: "Product",
        thisMonth: +(Math.random() * 1000).toFixed(2),
        ytd: +(Math.random() * 5000).toFixed(2),
      },
    ];
  };

  const [data, setData] = useState(generateRandomData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "20px",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "none",
                textAlign: "left",
                fontWeight: "normal",
                color: "gray",
              }}
            >
              Account
            </th>
            <th
              style={{
                border: "none",
                textAlign: "left",
                fontWeight: "normal",
                color: "gray",
              }}
            >
              This Month
            </th>
            <th
              style={{
                border: "none",
                textAlign: "left",
                fontWeight: "normal",
                color: "gray",
              }}
            >
              YTD
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "none" }}>
                <b>{item.account}</b>
              </td>
              <td style={{ border: "none" }}>
                <b>{item.thisMonth}</b>
              </td>
              <td style={{ border: "none" }}>
                <b>{item.ytd}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
