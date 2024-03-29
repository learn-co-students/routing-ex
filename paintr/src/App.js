import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
import PaintingsContainer from "./components/PaintingsContainer";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const mockProps = {
  color: "teal",
  icon: "paint brush",
  title: "Paintr",
  description: "Making ur dreams come true"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          color={mockProps.color}
          title={mockProps.title}
          icon="paint brush"
          description="All ur paintings"
        />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/paintings" component={PaintingsContainer} />
          <Route path="/" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
