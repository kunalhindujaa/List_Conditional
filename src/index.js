import React, { Component } from "react";
import ReactDOM from "react-dom";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

import "./styles.css";

class App extends Component {
  state = {
    userInput: ""
  };
  displayLength = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharacter = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const list = this.state.userInput.split("").map((ch, index) => {
      return (
        <CharComponent
          character={ch}
          key={index}
          clicked={() => this.deleteCharacter(index)}
        />
      );
    });

    return (
      <div>
        <h1> Kunal Hinduja</h1>
        <input
          type="text"
          placeholder="Enter your input"
          onChange={this.displayLength}
          value={this.state.userInput}
        />
        <p>{this.state.userInput.length}</p>
        <ValidationComponent length={this.state.userInput.length} />
        {list}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
