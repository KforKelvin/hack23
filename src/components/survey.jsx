import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import Button from '@mui/material/Button';

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Survey = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const [selectedButton, setSelectedButton] = useState();

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Let's start with your goal. Why are you looking for a new credit card?</h2>
                <p>
                  Choose the option that’s the closest fit.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <Button variant="contained" color="success" onClick={() => handleButtonClick(1)}>Button 1</Button>
                <Button variant="contained"  onClick={() => handleButtonClick(2)}>Button 2</Button>
                <Button variant="contained"  onClick={() => handleButtonClick(3)}>Button 3</Button>
                <Button variant="contained"  onClick={() => handleButtonClick(4)}>Button 4</Button>
                <br />
                <p>Selected button: {selectedButton}</p>
                <Button variant="contained"  onClick={() => console.log("Next button clicked")}>Next</Button>

              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
