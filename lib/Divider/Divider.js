'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(_ref) {
	var style = _ref.style;
	return _react2.default.createElement('div', { style: Object.assign({ marginTop: '10px', marginBottom: '10px', display: 'flex', height: '2px', background: '#ccc' }, style) });
};

exports.default = Divider;