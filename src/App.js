import React, { Component } from "react";
import GenerateEmployee from './GenerateEmployee';
import DisplayQuotes from './DisplayQuotes';
import "./App.css";

const sampleEmployee = {
  character: 'Sandy la meuf',
  quote: "Tout est possible avec Sandy",
  image: 'https://media.tenor.com/images/73bd10544fcdb55f7781c1592c207be9/tenor.gif'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      quote: sampleEmployee
    };
  }

  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>API Simpson's Quotes</h1>
        <GenerateEmployee selectEmployee={() => this.getEmployee()} />
        <DisplayQuotes character={this.state.quote.character} quote={this.state.quote.quote} image={this.state.quote.image} />
      </div>
    );
  }
}

export default App;