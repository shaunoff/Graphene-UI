"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var filled = "M16.72,12.21a1.92,1.92,0,0,0-.52,1.67l.64,3.91A1.86,1.86,0,0,1,15.06,20a1.76,1.76,0,0,1-.84-.22l-3.38-1.85a1.71,1.71,0,0,0-1.68,0L5.78,19.78a1.76,1.76,0,0,1-.84.22,1.86,1.86,0,0,1-1.78-2.21l.64-3.91a1.92,1.92,0,0,0-.52-1.67L.55,9.43a1.9,1.9,0,0,1,1-3.21l3.78-.57a1.81,1.81,0,0,0,1.36-1L8.38,1.05a1.77,1.77,0,0,1,3.24,0l1.69,3.56a1.81,1.81,0,0,0,1.36,1l3.78.57a1.9,1.9,0,0,1,1,3.21Z";
var unfilled = "M19.45,9.43a1.9,1.9,0,0,0-1-3.21l-3.78-.57a1.81,1.81,0,0,1-1.36-1L11.62,1.05a1.77,1.77,0,0,0-3.24,0L6.69,4.61a1.81,1.81,0,0,1-1.36,1l-3.78.57a1.9,1.9,0,0,0-1,3.21l2.73,2.78a1.92,1.92,0,0,1,.52,1.67l-.64,3.91A1.86,1.86,0,0,0,4.94,20a1.76,1.76,0,0,0,.84-.22l3.38-1.85a1.71,1.71,0,0,1,1.68,0l3.38,1.85a1.76,1.76,0,0,0,.84.22,1.86,1.86,0,0,0,1.78-2.21l-.64-3.91a1.92,1.92,0,0,1,.52-1.67ZM15,10.4a4.53,4.53,0,0,0-1.21,3.9L14.26,17,12,15.7A4.13,4.13,0,0,0,8,15.7L5.74,17l.44-2.66A4.53,4.53,0,0,0,5,10.4L3.11,8.52l2.56-.38A4.26,4.26,0,0,0,8.86,5.73L10,3.31l1.14,2.42a4.26,4.26,0,0,0,3.19,2.41l2.56.38Z";

var Star = function (_Component) {
  _inherits(Star, _Component);

  function Star() {
    _classCallCheck(this, Star);

    return _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).apply(this, arguments));
  }

  _createClass(Star, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var size = this.props.size || "20px";
      return _react2.default.createElement(
        "svg",
        {
          onClick: function onClick() {
            return _this2.props.setScore(_this2.props.index + 1);
          },
          onMouseEnter: function onMouseEnter() {
            return _this2.props.changeTemp(_this2.props.index);
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.props.changeTemp(null);
          },
          fill: "red", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 20 20", style: { width: "" + size, height: "" + size, enableBackground: 'new 0 0 449.406 449.406', padding: '5px' }, xmlSpace: "preserve" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { d: this.props.filled ? filled : unfilled, fill: "#6bada7" })
        )
      );
    }
  }]);

  return Star;
}(_react.Component);

exports.default = Star;