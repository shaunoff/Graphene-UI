import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inactiveStyle = {borderLeft: "6px solid #f8fafb", background:'#FFFFFF', display: 'flex', paddingTop: '15px', height: '40px', paddingBottom: '15px', flexDirection: 'row', width: '174px', alignItems: 'center'}
const activeStyle =   {borderLeft: "6px solid #6bada7", background:'#F8FAFB', display: 'flex', paddingTop: '15px', height: '36px', paddingBottom: '15px', borderTop: "2px solid #ccc", borderBottom: "2px solid #ccc", width: '178px',  alignItems: 'center'}

const Tab = ({title,active}) => {
	return (
		<div style={{...(active ? activeStyle : inactiveStyle), fontWeight: "500",color: "rgb(88,88,88)",textDecoration: 'none'}}>
			{title}
		</div>
	)
}





class SideNav extends Component {
	static Tab = Tab
	render() {
		return (
			<div style={{minHeight: '100vh',textDecoration: 'none',paddingTop: '10px',borderRight:'2px solid #ccc',display: 'flex',flexDirection: 'column', width: '180px',background: 'white',alignItems: "center"}}>
						{this.props.children}
			</div>
		)
	}
}

SideNav.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

SideNav.defaultProps = {
  message: 'World'
};

Tab.propTypes = {
  /** Message to display */
  testy: PropTypes.string
};

Tab.defaultProps = {
  testy: 'World'
};

export default SideNav
