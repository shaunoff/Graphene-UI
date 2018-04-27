'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var styles = {
	container: {
		width: '100%',
		height: '100%'
	},
	tabsContainer: {
		minHeight: "40px",
		display: 'flex'
	},
	tabsBlock: {
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
		marginLeft: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: "#fafafa"
	},
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