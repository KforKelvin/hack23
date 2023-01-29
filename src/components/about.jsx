import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Credit Card Helper</h2>
              <p>{props.data ? props.data.paragraph : "Are you a college student? How does it feel to manage everything yourself for the first time? You have to do homework, do housework, and manage money? If you are looking for someone to help you manage your money during busy times, please visit our website. We analyze the effective way to manage and invest money according to the information you entered and recommend the appropriate credit card. Also, we will select a few cards that will benefit you the most among the numerous cards and show you the process of going through detailed comparisons. It is an easy way to apply for a new credit card and get the cashback."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
