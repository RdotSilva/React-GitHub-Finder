import React, { Component } from "react";

export class Navbar extends Component {
	static defaultProps = {
		title: "GitHub Finder",
		icon: "fab fa-github"
	};

	render() {
		return (
			<nav className="navbar bg-primary">
				<div>
					<i className={this.props.icon}>{this.props.title}</i>
				</div>
			</nav>
		);
	}
}

export default Navbar;
