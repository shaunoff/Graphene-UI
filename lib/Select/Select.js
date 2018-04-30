'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _grapheneUi = require('graphene-ui');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selection = function (_React$Component) {
  _inherits(Selection, _React$Component);

  function Selection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Selection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Selection.__proto__ || Object.getPrototypeOf(Selection)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onChange(_this.props.label, _this.props.name);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Selection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { onClick: this.handleClick, style: { fontWeight: 500, color: "rgb(88, 88, 88)" } },
        this.props.label
      );
    }
  }]);

  return Selection;
}(_react2.default.Component);

var Select = function (_React$Component2) {
  _inherits(Select, _React$Component2);

  function Select() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Select);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
      selection: _this2.props.default || 'select'
    }, _this2.onChange = function (label, name) {
      _this2.props.onChange && _this2.props.onChange(name);
      _this2.setState({ selection: label });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var selection = this.state.selection;
      var onChange = this.onChange;

      return _react2.default.createElement(
        _grapheneUi.Popup,
        null,
        function (open, toggleOpen, position) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _grapheneUi.Button,
              { iconPosition: 'right', onClick: toggleOpen, icon: 'caratDown', style: { width: '150px' } },
              selection
            ),
            _react2.default.createElement(
              _grapheneUi.Popup.Content,
              { open: open, position: 'bottom', style: { width: '130px' } },
              _react2.default.createElement(
                'div',
                { onClick: toggleOpen, style: { display: 'flex', flexDirection: 'column' } },
                _this3.props.children({ onChange: onChange, selection: selection })
              )
            )
          );
        }
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.Selection = Selection;
exports.default = Select;