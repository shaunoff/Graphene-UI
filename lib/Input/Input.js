'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      focus: false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Label"
    };
    return _this;
  }

  _createClass(Input, [{
    key: 'changeValue',
    value: function changeValue(event) {
      var name = this.props.name;

      var value = event.target.value;
      this.setState({ value: value, error: "" }, this.props.onChange && this.props.onChange(name, value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          value = _state.value,
          error = _state.error,
          label = _state.label,
          focus = _state.focus;
      var _props = this.props,
          locked = _props.locked,
          name = _props.name;

      var active = focus || value.length;
      return _react2.default.createElement(
        'div',
        { style: _styles2.default.container },
        _react2.default.createElement(
          'label',
          { style: Object.assign({}, _styles2.default.labelFloat, active && _styles2.default.labelFloatActive) },
          label
        ),
        _react2.default.createElement('input', {
          id: 1,
          style: _styles2.default.input,
          type: 'text',
          value: value,
          onChange: this.changeValue.bind(this),
          onFocus: function onFocus() {
            return !locked && _this2.setState({ focus: true });
          },
          onBlur: function onBlur() {
            return !locked && _this2.setState({ focus: false });
          }
        })
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(Input);