import React from "react";
import "./home.css";
import FeaturedInfo from "../../componenets/feturedInfo/FeaturedInfo";
import Chart from "../../componenets/chart/Chart";
import WidgetSm from "../../componenets/widgetSm/WidgetSm";
import WidgetLg from "../../componenets/widgetLg/WidgetLg";
import { userdata } from "../../dummydata";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userdata}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    <div className="homeWidget">
      <WidgetSm />
    <WidgetLg />

    </div>

    </div>
  );
}
