import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Tables } from "./components/table";
import { Survey } from "./components/survey";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { About } from "./components/about";
import { Features } from "./components/features";
import PieChart from "./components/PieChart";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features}/>
      <Tables />
      <PieChart data={landingPageData.Rows} />

      <About />
    </div>
  );
};

export default App;
