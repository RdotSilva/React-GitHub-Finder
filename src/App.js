import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

import GithubState from "./context/github/GithubState";

const App = () => {
	// useState way
	// const [users, setUsers] = useState([]);
	// const [repos, setRepos] = useState([]);
	// const [loading, setLoading] = useState(false);
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

	// Set Alert
	const showAlert = (msg, type) => {
		// this.setState({ alert: { msg, type } });
		setAlert({ msg, type });

		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<GithubState>
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
										<Search setAlert={showAlert} />
										<Users />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route exact path="/user/:login" component={User} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
