import React from "react";
import "./App.css";
import Card from "./Card";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchfield: "",
    };
  }

  onSearch = (event) => {
    this.state.searchfield = event.target.value;
    console.log(this.state.searchfield);
  };

  render() {
    return (
      <div id="app-container">
        <Search handleChange={this.onSearch} />
        <div id="cards">
          <Card index="0" />
          <Card index="1" />
          <Card index="2" />
          <Card index="3" />
          <Card index="4" />
          <Card index="5" />
          <Card index="6" />
          <Card index="7" />
          <Card index="8" />
        </div>
      </div>
    );
  }
}

export default App;
