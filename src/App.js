import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Axios from "axios";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

const App = () => {
	// useState way
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	// Class based state way
	// state = {
	// 	users: [],
	// 	user: {},
	// 	repos: [],
	// 	loading: false,
	// 	alert: null
	// };

	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	const res = await Axios.get(
	// 		`https://api.github.com/users?client_id=${
	// 			process.env.REACT_APP_GITHUB_CLIENT_ID
	// 		}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);

	// 	this.setState({ users: res.data, loading: false });
	// }

	// Search GitHub users
	const searchUsers = async text => {
		// Class way
		// this.setState({ loading: true });

		// useState way
		setLoading(true);

		const res = await Axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// class way
		// this.setState({ users: res.data.items, loading: false });

		// useState way
		setUsers(res.data.items);
		setLoading(false);
	};

	// Get single GitHub user
	const getUser = async username => {
		// this.setState({ loading: true });
		setLoading(true);

		const res = await Axios.get(
			`https://api.github.com/users/${username}?client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		// this.setState({ user: res.data, loading: false });
		setUser(res.data);
		setLoading(false);
	};

	// Get users repos
	const getUserRepos = async username => {
		// this.setState({ loading: true });
		setLoading(true);

		const res = await Axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		// this.setState({ repos: res.data, loading: false });
		setRepos(res.data);
		setLoading(false);
	};

	// Clears users from state
	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	// Set Alert
	const showAlert = (msg, type) => {
		// this.setState({ alert: { msg, type } });
		setAlert({ msg, type });

		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container">
					<Alert alert={alert} />
					<Switch>
						<Route
							exact
							path="/"
							render={props => (
								<Fragment>
									<Search
										searchUsers={searchUsers}
										clearUsers={clearUsers}
										showClear={users.length > 0 ? true : false}
										setAlert={showAlert}
									/>
									<Users loading={loading} users={users} />
								</Fragment>
							)}
						/>
						<Route exact path="/about" component={About} />
						<Route
							exact
							path="/user/:login"
							render={props => (
								<User
									{...props}
									getUser={getUser}
									getUserRepos={getUserRepos}
									user={user}
									repos={repos}
									loading={loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
