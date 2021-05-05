import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Pie } from "react-chartjs-2";
import Header from "./components/Header";
import Button from "react-bootstrap/Button";
function page2() {
  const [data, setData] = useState({
    pie: {
      labels: ["Red", "Green", "Orange", "Blue", "Yellow"],
      datasets: [
        {
          data: [10, 20, 30, 40, 50],
          backgroundColor: ["red", "green", "orange", "blue", "yellow"],
        },
      ],
    },
  });
  return (
    <div>
      <Header title="Responsive PieChart" />
      <div className="container">
        <Link href="/">
          <Button variant="primary" className="button">
            Go to Page 1
          </Button>
        </Link>
        <Pie
          className="pie-container"
          data={data.pie}
          options={{ responsive: true }}
        />
      </div>
    </div>
  );
}

export default page2;
