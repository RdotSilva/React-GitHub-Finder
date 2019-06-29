import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
	// Class based way of doing state
	// state = {
	// 	text: ""
	// };

	// useState way
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
			searchUsers(text);
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
			{showClear && (
				<button className="btn btn-light btn-block" onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Search;
