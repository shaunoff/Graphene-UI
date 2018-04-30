'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grapheneUi = require('graphene-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_Component) {
  _inherits(Switch, _Component);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      on: _this.props.on
    }, _this.toggle = function () {
      _this.setState({ on: !_this.state.on }, function () {
        _this.props.onClick && _this.props.onClick(_this.state.on);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Switch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { onClick: this.toggle, style: Object.assign({ cursor: "pointer", height: '32px', width: '60px', border: '2px solid #ccc', borderRadius: '32px' }, this.props.style) },
        _react2.default.createElement('div', { style: { transition: 'all 0.3s ease', position: 'relative', left: (this.state.on ? 28 : 0) + 'px', height: '24px', width: '24px', borderRadius: '30px', background: '#' + (this.state.on ? '6bada7' : 'ccc'), margin: '4px' } }),
        _react2.default.createElement(_grapheneUi.Icon, { name: 'user' })
      );
    }
  }]);

  return Switch;
}(_react.Component);

Switch.propTypes = {
  /** state of the switch*/
  on: _propTypes2.default.bool,
  /** Color of the icon*/
  onClick: _propTypes2.default.function,
  /** custom styles to switch container*/
  style: _propTypes2.default.function
};
Switch.defaultProps = {
  on: false
};

exports.default = Switch;