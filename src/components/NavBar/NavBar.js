import React from 'react';
import PropTypes from 'prop-types';
import GrapheneContext from '../../styles/GrapheneContext'
/** Navbar component sist at the top of the page */

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

export const NavBar = ({style}) => (
	<GrapheneContext.Consumer>
		{value => {
			return (
				<div style={{...value, ...styles.container, ...style}}>
					<img style={{maxHeight: '80%'}} src='Graphene.png' alt='Graphene.png'/>
					hello
				</div>
			)
		}}
	</GrapheneContext.Consumer>

)

NavBar.propTypes = {
  /** Navbar Componenet */
	style: PropTypes.object,
	/** Navbar Componenet */
  message: PropTypes.string
};

NavBar.defaultProps = {
  message: 'World'
};




export default NavBar;
