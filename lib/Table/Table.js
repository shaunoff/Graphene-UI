'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(_ref) {
	var children = _ref.children,
	    compact = _ref.compact;
	return _react2.default.createElement(
		'div',
		{ style: Object.assign({}, _styles2.default.row, _styles2.default.header, compact && _styles2.default.compact) },
		children
	);
};

var Body = function Body(_ref2) {
	var children = _ref2.children;

	children = _react2.default.Children.map(children, function (child, index) {
		return _react2.default.cloneElement(child, { index: index, key: index });
	});
	return _react2.default.createElement(
		'div',
		null,
		children
	);
};

var Row = function Row(_ref3) {
	var children = _ref3.children,
	    key = _ref3.key,
	    index = _ref3.index,
	    compact = _ref3.compact;
	return _react2.default.createElement(
		'div',
		{ key: index, style: Object.assign({}, _styles2.default.rowContent, index % 2 === 0 ? _styles2.default.evenRow : null, compact && _styles2.default.compact) },
		children
	);
};

var HeaderCell = function HeaderCell(_ref4) {
	var children = _ref4.children,
	    title = _ref4.title,
	    style = _ref4.style;
	return _react2.default.createElement(
		'div',
		{ style: Object.assign({}, _styles2.default.headerCell, style ? style : { flex: 1 }) },
		title || children
	);
};

var Cell = function Cell(_ref5) {
	var children = _ref5.children,
	    style = _ref5.style;
	return _react2.default.createElement(
		'div',
		{ style: style ? style : { flex: 1 } },
		_react2.default.createElement(
			'div',
			null,
			children
		)
	);
};

var Table = function (_Component) {
	_inherits(Table, _Component);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: _styles2.default.container },
				this.props.children
			);
		}
	}]);

	return Table;
}(_react.Component);

Table.Header = Header;
Table.HeaderCell = HeaderCell;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
exports.default = Table;