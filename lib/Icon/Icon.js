'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var size = this.props.size || "16px";
      var color = this.props.color || "#6bada7";

      return _react2.default.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', id: 'Layer_1', x: '0px', y: '0px', viewBox: '0 0 20 20', style: { width: '' + size, height: '' + size, enableBackground: 'new 0 0 449.406 449.406', padding: '5px' }, xmlSpace: 'preserve' },
        _react2.default.createElement(
          'g',
          null,
          _icons2.default[this.props.name].paths && _icons2.default[this.props.name].paths.map(function (path) {
            return _react2.default.createElement('path', { key: path, d: path, fill: color });
          }),
          _icons2.default[this.props.name].circles && _icons2.default[this.props.name].circles.map(function (circle, index) {
            return _react2.default.createElement('circle', { key: circle, cx: circle.x, cy: circle.y, r: circle.r, style: Object.assign({}, circle.style, { stroke: color }) });
          })
        )
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.propTypes = {
  /** Color of the icon*/
  color: _propTypes2.default.string,
  /** The name of the icon*/
  name: _propTypes2.default.string.isRequired
};
Icon.defaultProps = {
  color: "#6bada7"
};

exports.default = Icon;