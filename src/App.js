import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello from React</h1>
				<UserItem />
				<Navbar />
			</div>
		);
	}
}

export default App;
