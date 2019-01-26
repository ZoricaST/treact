import React, { Component } from "react";
import Table from "./Table";

function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}- {props.prezime}
    </h1>
  );
}
function Zdravo(props) {
  return <h1>Zdravo, {props.name}</h1>;
}
const welcome = {
  name: "Pera",
  prezime: "Vuksanovic"
};

class App extends Component {
  render() {
    const characters1 = {
      ime: "Carli",
      posao: "profesor"
    };
    const characters = [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ];

    return (
      <div className="container">
      <Tabela neko="zasto"
      nesto="kako"/>
        <Header />
        <Content/>
        <Zdravo name="Zorica" />
        <Welcome name={welcome.name} prezime={welcome.prezime} />
        <p>{characters1.ime}</p>
        <Table characterData={characters} />
      </div>
    );
  }
}

const Tabela = props => { 
  
      return (
          <tr >
            <td>{props.neko}</td>
              <td>{props.nesto}</td>
             
          </tr>
      ); 
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
export default App;
