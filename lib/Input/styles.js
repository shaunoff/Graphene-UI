'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var styles = {
	container: {
		width: '100%',
		height: '62px',
		borderRadius: '4px',
		position: 'relative',
		boxSizing: 'border-box'
		// border: '1px solid #dac',
	},
	labelFloatActive: {
		fontSize: '12px',
		top: '0px',
		left: '5px'
	},
	labelFloat: {
		fontWeight: 700,
		color: '#6bada7',
		position: 'relative',
		top: '30px',
		left: '5px',
		transition: 'top 200ms ease-out, font-size 400ms ease-out'
	},
	input: {
		width: "100%",
		boxSizing: 'border-box',
		height: '40px',
		position: 'relative',
		padding: '0px 10px',
		border: '2px solid #ccc',
		borderRadius: '4px',
		fontFamily: "Quicksand",
		fontSize: '16px',
		fontWeight: 400,
		lineHeight: 'normal',
		backgroundColor: 'transparent',
		color: '#282828',
		outline: 'none'
		// transition: "0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,0.1s padding ease-in-out,-webkit-appearance: none",
	}

};
exports.default = styles;