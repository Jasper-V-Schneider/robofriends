import React from "react";
import "./App.css";
import CardList from "./CardList";
import Search from "../components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    this.setState({
      robots: [
        {
          name: "Bob",
        },
        {
          name: "Tom",
        },
        {
          name: "Nick",
        },
        {
          name: "Cevin",
        },
        {
          name: "Robin",
        },
        {
          name: "Cenk",
        },
        {
          name: "Nils",
        },
        {
          name: "David",
        },
        {
          name: "Elia",
        },
        {
          name: "Lino",
        },
        {
          name: "Basti",
        },
        {
          name: "Sonja",
        },
        {
          name: "Jakob",
        },
        {
          name: "Louis",
        },
        {
          name: "Marisa",
        },
        {
          name: "Sarah",
        },
        {
          name: "Ben",
        },
        {
          name: "Niclas",
        },
        {
          name: "Nick",
        },
      ],
    });
  }

  onSearch = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    return (
      <div id="app-container">
        <Search handleChange={this.onSearch} />
        <CardList input={this.state.searchfield} robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
