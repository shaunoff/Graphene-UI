'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gsap = require('gsap');

var _reactTransitionGroup = require('react-transition-group');

var _reactSimpleLineIcons = require('react-simple-line-icons');

var _reactSimpleLineIcons2 = _interopRequireDefault(_reactSimpleLineIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	container: {
		width: '100%',
		height: '400px',
		display: 'grid',
		gridTemplateColumns: '50px auto 50px',
		gridTemplateRows: 'auto 50px',
		alignItems: 'center'
	},
	panel: {
		position: 'relative',
		width: '100%',
		height: '100%',
		border: '2px solid #ccc',
		overflow: 'hidden'
	}
};

// animateOpen = () => {
//   var animation = new TimelineMax()
//   animation
//     .set(this.container, {opacity: 0})
//     .from(this.container, duration/1000, {height: 0})
//     .to(this.container, duration/1000, { opacity: 1 },`-=${duration/1000}`)
// }

var Panel = function (_Component) {
	_inherits(Panel, _Component);

	function Panel() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Panel);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.forwardEnter = function () {
			_this.props.handleAnimate();
			var width = _this.panel.clientWidth;
			var animation = new _gsap.TimelineMax({
				onComplete: _this.props.handleAnimate
			});
			animation.from(_this.panel, 2, { ease: _gsap.Power3.easeInOut, x: width });
		}, _this.forwardExit = function () {
			var width = _this.panel.clientWidth;
			var animation = new _gsap.TimelineMax();
			animation.to(_this.panel, 2, { ease: _gsap.Power3.easeInOut, x: '-' + width });
		}, _this.backEnter = function () {
			_this.props.handleAnimate();
			var width = _this.panel.clientWidth;
			var animation = new _gsap.TimelineMax({
				onComplete: _this.props.handleAnimate
			});
			animation.from(_this.panel, 2, { ease: _gsap.Power3.easeInOut, x: '-' + width });
		}, _this.backExit = function () {
			var width = _this.panel.clientWidth;
			var animation = new _gsap.TimelineMax();
			animation.to(_this.panel, 2, { ease: _gsap.Power3.easeInOut, x: width });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Panel, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    index = _props.index,
			    activeIndex = _props.activeIndex,
			    forward = _props.forward,
			    style = _props.style;

			return _react2.default.createElement(
				_reactTransitionGroup.Transition,
				{
					timeout: 2000,
					'in': activeIndex === index,
					unmountOnExit: true,
					onEntering: forward ? this.forwardEnter : this.backEnter,
					onExiting: forward ? this.forwardExit : this.backExit
				},
				_react2.default.createElement(
					'div',
					{
						ref: function ref(panel) {
							return _this2.panel = panel;
						},
						style: Object.assign({
							position: 'absolute',
							width: '100%',
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}, style)
					},
					this.props.children
				)
			);
		}
	}]);

	return Panel;
}(_react.Component);

var Carousel = function (_Component2) {
	_inherits(Carousel, _Component2);

	function Carousel() {
		var _ref2;

		var _temp2, _this3, _ret2;

		_classCallCheck(this, Carousel);

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
			activeIndex: 0,
			forward: true,
			animating: false,
			length: _react2.default.Children.count(_this3.props.children)
		}, _this3.handleAnimate = function () {
			_this3.setState(function (_ref3) {
				var animating = _ref3.animating;
				return { animating: !animating };
			});
		}, _this3.handleBack = function () {
			if (_this3.state.animating) {
				return;
			}
			_this3.setState({ forward: false }, function () {
				var newStage = _this3.state.activeIndex - 1 < 0 ? _this3.state.length - 1 : _this3.state.activeIndex - 1;
				_this3.setState({ activeIndex: newStage });
			});
		}, _this3.handleChange = function () {
			if (_this3.state.animating) {
				return;
			}
			_this3.setState({ forward: true }, function () {
				var newStage = _this3.state.activeIndex + 1 > _this3.state.length - 1 ? 0 : _this3.state.activeIndex + 1;
				_this3.setState({ activeIndex: newStage });
			});
		}, _temp2), _possibleConstructorReturn(_this3, _ret2);
	}

	_createClass(Carousel, [{
		key: 'componentDidMount',

		// componentDidMount(){
		//   const count = React.Children.count(this.props.children)
		//   //this.setState({length: count})
		// }
		value: function componentDidMount() {
			if (this.props.interval) {
				setInterval(this.handleChange, this.props.interval);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    activeIndex = _state.activeIndex,
			    length = _state.length,
			    forward = _state.forward;
			var handleAnimate = this.handleAnimate;

			var lengthArray = [].concat(_toConsumableArray(Array(length)));
			var children = _react2.default.Children.map(this.props.children, function (child, index) {
				return _react2.default.cloneElement(child, {
					index: index,
					activeIndex: activeIndex,
					forward: forward,
					handleAnimate: handleAnimate
				});
			});
			return _react2.default.createElement(
				'div',
				{ style: styles.container },
				_react2.default.createElement(
					'div',
					{
						style: { display: 'flex', justifyContent: 'center' },
						onClick: this.handleBack
					},
					_react2.default.createElement(_reactSimpleLineIcons2.default, { color: '#585858', size: 'large', name: 'arrow-left-circle' })
				),
				_react2.default.createElement(
					'div',
					{ style: styles.panel },
					children
				),
				_react2.default.createElement(
					'div',
					{
						style: { display: 'flex', justifyContent: 'center' },
						onClick: this.handleChange
					},
					_react2.default.createElement(_reactSimpleLineIcons2.default, { color: '#585858', size: 'large', name: 'arrow-right-circle' })
				),
				_react2.default.createElement(
					'div',
					{
						style: {
							gridRow: 2,
							gridColumnStart: 1,
							gridColumnEnd: 4,
							display: 'flex',
							justifyContent: 'center'
						}
					},
					lengthArray.map(function (dot, index) {
						return _react2.default.createElement('div', {
							key: index,
							style: {
								background: index === activeIndex ? '#585858' : 'none',
								margin: '0px 6px',
								width: '8px',
								height: '8px',
								border: '2px solid #585858',
								borderRadius: '8px'
							}
						});
					})
				)
			);
		}
	}]);

	return Carousel;
}(_react.Component);

Carousel.Panel = Panel;


Carousel.propTypes = {
	/** The index of the current index */
	activeIndex: _propTypes2.default.bool
};

exports.default = Carousel;