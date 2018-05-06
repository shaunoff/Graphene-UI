'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gsap = require('gsap');

var _reactTransitionGroup = require('react-transition-group');

var _grapheneUi = require('graphene-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var duration = 400;

var Section = function (_React$Component) {
	_inherits(Section, _React$Component);

	function Section() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Section);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Section.__proto__ || Object.getPrototypeOf(Section)).call.apply(_ref, [this].concat(args))), _this), _this.animateOpen = function () {
			var animation = new _gsap.TimelineMax();
			animation.set(_this.container, { opacity: 0 }).from(_this.container, duration / 1000, { height: 0 }).to(_this.container, duration / 1000, { opacity: 1 }, '-=' + duration / 1000);
		}, _this.animateClose = function () {
			var animation = new _gsap.TimelineMax();
			animation.to(_this.container, 0.2, { opacity: 0, margin: 0 }).to(_this.container, 0.3, { height: 0 }, '-=' + 0.2);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    activeIndex = _props.activeIndex,
			    index = _props.index,
			    title = _props.title,
			    children = _props.children,
			    handleClick = _props.handleClick;

			return _react2.default.createElement(
				'div',
				{ key: index, style: { borderTop: index !== 0 && '2px solid #ccc' } },
				_react2.default.createElement(
					'div',
					{
						style: {
							cursor: 'pointer',
							display: 'flex',
							padding: '10px',
							justifyContent: 'space-between',
							alignItems: 'center',
							fontWeight: 500,
							color: 'rgb(88, 88, 88)',
							maxHeight: '25px'
						},
						onClick: function onClick() {
							handleClick(index);
						}
					},
					title,
					_react2.default.createElement(_grapheneUi.Icon, { name: activeIndex.includes(index) ? 'caratDown' : 'caratLeft' })
				),
				_react2.default.createElement(
					_reactTransitionGroup.Transition,
					{
						timeout: duration,
						'in': activeIndex.includes(index),
						unmountOnExit: true,
						onEntering: this.animateOpen,
						onExiting: this.animateClose
					},
					function (state) {
						return _react2.default.createElement(
							'div',
							{
								ref: function ref(container) {
									return _this2.container = container;
								},
								style: { margin: '10px', overflow: 'hidden' }
							},
							children
						);
					}
				)
			);
		}
	}]);

	return Section;
}(_react2.default.Component);

exports.default = Section;