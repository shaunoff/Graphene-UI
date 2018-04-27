'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactSimpleLineIcons = require('react-simple-line-icons');

var _reactSimpleLineIcons2 = _interopRequireDefault(_reactSimpleLineIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var popAnimation = _radium2.default.keyframes({
  '50%': { transform: 'scale(1.2)' }
});

var styles = function styles(_ref) {
  var count = _ref.count;

  return {
    fontFamily: 'quicksand',
    fontSize: '16px',
    position: 'relative',
    fontWeight: '500',
    background: '#6bada7',
    borderRadius: '4px ' + (count ? "0px 0px" : "4px 4px") + ' 4px',
    border: '0px',
    color: 'white',
    margin: '10 0px 10px 10px',
    ':hover': {
      animation: 'x 0.8s ease',
      animationName: popAnimation
    },
    ':disabled': {
      background: '#ccc',
      color: "white",
      cursor: "not-allowed"
    }
  };
};

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref2, [this].concat(args))), _this), _this.handleClick = function () {
      console.log("clicked oioio");
    }, _this.getButtonProps = function () {
      var _this$props = _this.props,
          _onClick = _this$props.onClick,
          style = _this$props.style;

      return {
        disabled: _this.props.disabled,
        style: Object.assign({}, styles(_this.props)),
        onClick: function onClick() {
          _onClick && _onClick();
          _this.handleClick();
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      return _react2.default.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center' } },
        _react2.default.createElement(
          'button',
          this.getButtonProps(),
          _react2.default.createElement(
            'div',
            { style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '8px' } },
            this.props.icon && _react2.default.createElement(
              'div',
              { style: { position: 'relative', marginRight: '10px' } },
              _react2.default.createElement(_reactSimpleLineIcons2.default, { color: 'white', name: this.props.icon })
            ),
            this.props.children
          )
        ),
        this.props.count && _react2.default.createElement(
          'div',
          { style: { color: '#6bada7', fontWeight: '600', textAlign: 'center', width: '20px', border: '2px solid #6bada7', padding: '7px 6px 8px 6px', borderRadius: '0px 4px 4px 0px' } },
          this.props.count
        )
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(Button);