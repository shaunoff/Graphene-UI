'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
	width: '100%',
	height: '100%',
	padding: '10px',
	background: 'white',
	border: "2px solid #ccc",
	borderRadius: '8px',
	overflow: 'scroll',
	boxSizing: 'border-box'
};

var Segment = function Segment(_ref) {
	var children = _ref.children;
	return _react2.default.createElement(
		'div',
		{ style: styles },
		children
	);
};

exports.default = Segment;