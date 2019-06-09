import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Axios from "axios";

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	async componentDidMount() {
		const res = await Axios.get("https://api.github.com/users");
	}
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
