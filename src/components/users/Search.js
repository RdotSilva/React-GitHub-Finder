import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);

	const [text, setText] = useState("");

	// class way
	// const onChange = e => this.setState({ [e.target.name]: e.target.value });

	// useState way
	const onChange = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		// if (this.state.text === "") {
		if (text === "") {
			// this.props.setAlert("Please enter something", "light");
			setAlert("Please enter something", "light");
		} else {
			// this.props.searchUsers(this.state.text);
			// searchUsers(text);
			githubContext.searchUsers(text);
			// this.setState({ text: "" });
			setText("");
		}
	};

	return (
		<div>
			{/* <form onSubmit={this.onSubmit} className="form"> */}
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					// value={this.state.text}
					value={text}
					// onChange={this.onChange}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block"
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className="btn btn-light btn-block"
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default Search;
