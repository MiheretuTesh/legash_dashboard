import React from "react";
// import { useGetAdminAssetMetrics } from "../../hooks/useGetAdminAssetMetrics";
import { useStyles } from "./index.style";
import HomeCard from "../../components/HomeCard/index";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Jan", uv: 400, pv: 200, amt: 2400 },
  { name: "Feb", uv: 200, pv: 240, amt: 2400 },
  { name: "Mar", uv: 100, pv: 400, amt: 2400 },
  { name: "Apr", uv: 300, pv: 40, amt: 2400 },
  { name: "May", uv: 500, pv: 40, amt: 2400 },

  { name: "Jun", uv: 1000, pv: 40, amt: 2400 },

  { name: "Jul", uv: 1200, pv: 40, amt: 2400 },

  { name: "Aug", uv: 900, pv: 40, amt: 2400 },

  { name: "Sept", uv: 400, pv: 40, amt: 2400 },

  { name: "Oct", uv: 600, pv: 40, amt: 2400 },
  { name: "Nov", uv: 700, pv: 40, amt: 2400 },

  { name: "Dec", uv: 40, pv: 1900, amt: 2400 },
];

const AdminHomePage = () => {
  const styles = useStyles();

  // const { isLoading, data } = useGetAdminAssetMetrics();

  const homePageCardContent = [
    { title: "Daily Donation", number: "12,000", percent: false },
    {
      title: "Weekly Donation",
      number: "100,000",
      percent: false,
    },
    {
      title: "Total Donation",
      number: "400,000",
      percent: false,
    },
  ];

  return (
    <>
      <div style={{ marginTop: "54px" }} />
      <div className={styles.container}>
        {homePageCardContent.map((card, index) => (
          <HomeCard
            key={index}
            name={card.title}
            value={card.number}
            isLoading={false}
            isPercent={card.percent}
          />
        ))}
        <div style={{ display: "flex", flexDirection: "row", width: "89%" }}>
          <LineChart width={880} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
          <div style={{ width: "120px" }}></div>
          <div className={`${styles.cardContainer}`}>
            <div className={styles.headerContainer}>
              <h1 className={styles.headerText}>Recent added campaigns</h1>
            </div>
            <div
              style={{
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  height="80"
                  style={{ borderRadius: "10px" }}
                  src="https://images.unsplash.com/photo-1548783346-61db7a22e9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                />
                <div style={{ width: "20px" }}></div>
                <h4>Help a Chemo patient</h4>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  height="80"
                  style={{ borderRadius: "10px" }}
                  src="https://images.unsplash.com/photo-1547082722-ebad0c0cb815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div style={{ width: "20px" }}></div>
                <h4>Help a patient</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
