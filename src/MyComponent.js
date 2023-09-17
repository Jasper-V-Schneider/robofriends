import React from "react";
import "./MyComponent.css";
import logo from "./logo.svg";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>MyComponent is being build...</h1>
        <img src={logo}></img>
        <p>
          The React.js framework is an open-source JavaScript framework and
          library developed by Facebook. Its used for building interactive user
          interfaces and web applications quickly and efficiently with
          significantly less code than you would with vanilla JavaScript.
        </p>
        <button>{this.props.buttonName}</button>
      </div>
    );
  }
}

export default MyComponent;
