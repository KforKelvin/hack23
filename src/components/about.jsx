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
              <p>{props.data ? props.data.paragraph : "Are you a college student that is trying to sign-up for your first or second credit card? Don’t know what to pick? We are here to help! We help you to find out the best credit card for you based on your spending pattern. "}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
