'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NavBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Navbar component sist at the top of the page */
var NavBar = exports.NavBar = function NavBar() {
	return _react2.default.createElement(
		'div',
		{ style: styles.container },
		_react2.default.createElement('img', { style: { maxHeight: '80%' }, src: './Graphene.png' })
	);
};

NavBar.propTypes = {
	/** Navbar Componenet */
	message: _propTypes2.default.string
};

NavBar.defaultProps = {
	message: 'World'
};

var styles = {
	container: {
		paddingLeft: '20px',
		background: 'white',
		height: "55px",
		display: 'flex',
		alignItems: 'center',
		borderBottom: "2px solid #ccc"
	}
};

exports.default = NavBar;