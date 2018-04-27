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

var StarFill = function (_Component) {
  _inherits(StarFill, _Component);

  function StarFill() {
    _classCallCheck(this, StarFill);

    return _possibleConstructorReturn(this, (StarFill.__proto__ || Object.getPrototypeOf(StarFill)).apply(this, arguments));
  }

  _createClass(StarFill, [{
    key: "render",
    value: function render() {
      var size = this.props.size || "30px";
      return _react2.default.createElement(
        "svg",
        { fill: "red", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 20 20", style: { width: "" + size, enableBackground: 'new 0 0 449.406 449.406' }, xmlSpace: "preserve" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { d: "M16.72,12.21a1.92,1.92,0,0,0-.52,1.67l.64,3.91A1.86,1.86,0,0,1,15.06,20a1.76,1.76,0,0,1-.84-.22l-3.38-1.85a1.71,1.71,0,0,0-1.68,0L5.78,19.78a1.76,1.76,0,0,1-.84.22,1.86,1.86,0,0,1-1.78-2.21l.64-3.91a1.92,1.92,0,0,0-.52-1.67L.55,9.43a1.9,1.9,0,0,1,1-3.21l3.78-.57a1.81,1.81,0,0,0,1.36-1L8.38,1.05a1.77,1.77,0,0,1,3.24,0l1.69,3.56a1.81,1.81,0,0,0,1.36,1l3.78.57a1.9,1.9,0,0,1,1,3.21Z", fill: "#6bada7" })
        )
      );
    }
  }]);

  return StarFill;
}(_react.Component);

exports.default = StarFill;