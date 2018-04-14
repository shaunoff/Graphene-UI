import React from 'react';

const Divider = ({style}) => (
	<div style={{marginTop: '10px', marginBottom: '10px', display:'flex', height: '2px', background: '#ccc', ...style}}></div>
);

export default Divider;
