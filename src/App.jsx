import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Tables } from "./components/table";
import { Survey } from "./components/survey";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { About } from "./components/about";
import { endSurvey } from "./components/endsurvey";
import { Features } from "./components/features";
import PieChart from "./components/PieChart";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function IFrame({ src, width, height }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <iframe src={"https://web.powerva.microsoft.com/environments/Default-68f381e3-46da-47b9-ba57-6f322b8f0da1/bots/new_bot_86dadcbcd5114e3ab7435ca0f7b1806d/webchat"} width={600} height={600}  />
    </div>
  );
}

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About />
      {/* <Features data={landingPageData.Features}/> */}
      <Tables />
      {/* <Survey data={landingPageData.Rows} /> */}
      
      <PieChart/>
      {/* <iframe width="600px" height="600px" src={"https://web.powerva.microsoft.com/environments/Default-68f381e3-46da-47b9-ba57-6f322b8f0da1/bots/new_bot_86dadcbcd5114e3ab7435ca0f7b1806d/webchat"}/>       */}
      <IFrame/>
      {/* <endSurvey/> */}

    </div>
  );
};

export default App;
