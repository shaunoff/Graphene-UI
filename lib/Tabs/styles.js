'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
	container: {
		width: '100%',
		height: '100%'
	},
	tabsContainer: {
		minHeight: "40px",
		display: 'flex'
	},
	tabsBlock: _defineProperty({
		position: 'relative',
		zIndex: 4,
		top: '2px',
		height: "40px",
		width: "200px",
		borderLeft: '2px solid #ccc',
		borderTop: '2px solid #ccc',
		borderRight: '2px solid #ccc',
		borderBottom: '2px solid white',
		borderTopRightRadius: '8px',
		borderTopLeftRadius: '8px',
		background: 'blue',
		marginLeft: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}, 'background', "#fafafa"),
	activeTabsBlock: {
		background: 'white',
		zIndex: 6
	},
	panelContainer: {
		position: 'relative',
		zIndex: 5,
		borderRadius: '8px',
		border: '2px solid #ccc',
		height: "calc(100% - 40px)",
		background: 'white'
	}
};
exports.default = styles;