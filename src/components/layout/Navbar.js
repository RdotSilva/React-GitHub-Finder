import React, { Component } from "react";

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar bg-primary">
				<div>
					<i className="fab fa-github">{this.props.title}</i>
				</div>
			</nav>
		);
	}
}

export default Navbar;
