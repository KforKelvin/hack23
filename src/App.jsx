import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Tables } from "./components/table";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { About } from "./components/about";
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
      <Tables />
      
      <PieChart data={landingPageData.Rows} />
      
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <button type="button"  data-dismiss="modal">Close</button>
              </button>
            </div>
            <div class="modal-body">
            <IFrame/>
            </div>
            <div class="modal-footer">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
