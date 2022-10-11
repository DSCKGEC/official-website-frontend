import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
  const LineChart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  const PieChart = {
    options: {
      dataLabels: {
        enabled: true,
        formatter: (val: any) => {
          return val.toFixed(2) + "%";
        },
      },
    },
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  };
  return <section className="home-container">Home</section>;
};

export default Home;
