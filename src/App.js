import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello from React</h1>
				<Navbar />
				<div className="container">
					<Users />
				</div>
			</div>
		);
	}
}

export default App;
