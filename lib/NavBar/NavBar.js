'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NavBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GrapheneContext = require('../../styles/GrapheneContext');

var _GrapheneContext2 = _interopRequireDefault(_GrapheneContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Navbar component sist at the top of the page */

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

var NavBar = exports.NavBar = function NavBar(_ref) {
	var style = _ref.style;
	return _react2.default.createElement(
		_GrapheneContext2.default.Consumer,
		null,
		function (value) {
			return _react2.default.createElement(
				'div',
				{ style: Object.assign({}, value, styles.container, style) },
				_react2.default.createElement('img', { style: { maxHeight: '80%' }, src: 'Graphene.png', alt: 'Graphene.png' }),
				'hello'
			);
		}
	);
};

NavBar.propTypes = {
	/** Navbar Componenet */
	style: _propTypes2.default.object,
	/** Navbar Componenet */
	message: _propTypes2.default.string
};

NavBar.defaultProps = {
	message: 'World'
};

exports.default = NavBar;