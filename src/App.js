import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Axios from "axios";

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const res = await Axios.get(
			`https://api.github.com/users?client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ users: res.data, loading: false });
	}

	// Search GitHub users
	searchUsers = async text => {
		const res = await Axios.get(
			`https://api.github.com/users?q=${text}&client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ users: res.data.items, loading: false });
	};

	render() {
		return (
			<div className="App">
				<h1>Hello from React</h1>
				<Navbar />
				<div className="container">
					<Search searchUsers={this.searchUsers} />
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
