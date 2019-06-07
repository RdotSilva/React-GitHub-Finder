import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello from React</h1>
				<Navbar title="GitHub Finder" />
			</div>
		);
	}
}

export default App;
