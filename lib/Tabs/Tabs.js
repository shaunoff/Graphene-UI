'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabList = function TabList(_ref) {
	var activeIndex = _ref.activeIndex,
	    children = _ref.children,
	    changeIndex = _ref.changeIndex;

	var childrenWithProps = _react2.default.Children.map(children, function (child, index) {
		return _react2.default.cloneElement(child, { activeIndex: activeIndex, index: index, changeIndex: changeIndex });
	});
	return _react2.default.createElement(
		'div',
		{ style: _styles2.default.tabsContainer },
		childrenWithProps
	);
};

var TabPanel = function TabPanel(_ref2) {
	var activeIndex = _ref2.activeIndex,
	    children = _ref2.children;

	var childrenWithProps = _react2.default.Children.map(children, function (child, index) {
		return _react2.default.cloneElement(child, { activeIndex: activeIndex, index: index });
	});
	return _react2.default.createElement(
		'div',
		{ style: _styles2.default.panelContainer },
		childrenWithProps
	);
};
var Panel = function Panel(_ref3) {
	var activeIndex = _ref3.activeIndex,
	    children = _ref3.children,
	    index = _ref3.index;

	if (activeIndex === index) {
		return _react2.default.createElement(
			'div',
			{ style: { width: '100%', height: '100%' } },
			children
		);
	}
	return null;
};
var Tab = function Tab(_ref4) {
	var activeIndex = _ref4.activeIndex,
	    children = _ref4.children,
	    title = _ref4.title,
	    index = _ref4.index,
	    changeIndex = _ref4.changeIndex;

	return _react2.default.createElement(
		'div',
		{ onClick: function onClick() {
				return changeIndex(index);
			}, style: Object.assign({}, _styles2.default.tabsBlock, activeIndex === index ? _styles2.default.activeTabsBlock : null) },
		_react2.default.createElement(
			'span',
			{ style: { fontWeight: 500, color: "rgb(88, 88, 88)" } },
			title
		)
	);
};

var Tabs = function (_Component) {
	_inherits(Tabs, _Component);

	function Tabs() {
		var _ref5;

		var _temp, _this, _ret;

		_classCallCheck(this, Tabs);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref5, [this].concat(args))), _this), _this.state = {
			activeIndex: 0
		}, _this.changeIndex = function (activeIndex) {
			_this.setState({ activeIndex: activeIndex });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Tabs, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var activeIndex = this.state.activeIndex;

			var childrenWithProps = _react2.default.Children.map(this.props.children, function (child) {
				return _react2.default.cloneElement(child, { activeIndex: activeIndex, changeIndex: _this2.changeIndex });
			});
			return _react2.default.createElement(
				'div',
				{ style: _styles2.default.container },
				childrenWithProps
			);
		}
	}]);

	return Tabs;
}(_react.Component);

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
Tabs.TabPanel = TabPanel;


TabList.propTypes = {
	/** Put your message here */
	tabListExample: _propTypes2.default.string
};

TabList.defaultProps = {
	tabListExample: 'World'
};

exports.default = Tabs;