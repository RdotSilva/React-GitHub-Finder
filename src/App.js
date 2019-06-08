import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello from React</h1>
				<Users />
				<Navbar />
			</div>
		);
	}
}

export default App;
