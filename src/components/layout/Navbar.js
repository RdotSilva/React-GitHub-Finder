import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
	return (
		<nav className="navbar bg-primary">
			<div>
				<i className={icon}>{title}</i>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	title: "GitHub Finder",
	icon: "fab fa-github"
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
