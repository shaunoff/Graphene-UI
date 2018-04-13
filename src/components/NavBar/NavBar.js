import React from 'react';
import PropTypes from 'prop-types';

/** Navbar component sist at the top of the page */
const NavBar = () => (
	<div style={styles.container}>
		<img style={{maxHeight: '80%'}} src='./Graphene.png' />
	</div>
)

NavBar.propTypes = {
  /** Navbar Componenet */
  message: PropTypes.string
};

NavBar.defaultProps = {
  message: 'World'
};


const styles = {
	container: {
		paddingLeft: '20px',
		background: 'white',
		height: "55px",
		display: 'flex',
		alignItems: 'center',
		borderBottom: "2px solid #ccc"
	}
}

export default NavBar;
