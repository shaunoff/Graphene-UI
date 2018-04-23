import React from 'react';

const styles = {
	width: '100%',
	height: '100%',
	padding: '10px',
	background: 'white',
	border: "2px solid #ccc",
	borderRadius: '8px',
	overflow: 'scroll',
	boxSizing: 'border-box'
}

const Segment = ({children,style}) => (
	<div style={{...styles,...style}}>
		{children}
	</div>
);

export default Segment;
