'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Star = require('./Star');

var _Star2 = _interopRequireDefault(_Star);

var _StarFill = require('./StarFill');

var _StarFill2 = _interopRequireDefault(_StarFill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rating = function (_React$Component) {
  _inherits(Rating, _React$Component);

  function Rating() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rating);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rating.__proto__ || Object.getPrototypeOf(Rating)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      score: _this.props.score,
      tempScore: null
    }, _this.changeTempScore = function (score) {
      if (_this.props.disabled) return;
      _this.setState({ tempScore: score });
    }, _this.setScore = function (score) {
      if (_this.props.disabled) return;
      _this.setState({ score: score }, function () {
        return _this.props.onClick && _this.props.onClick(score);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rating, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var stars = new Array(this.props.stars).fill("star");
      return _react2.default.createElement(
        'div',
        { style: { display: 'flex' } },
        stars.map(function (star, index) {
          return _react2.default.createElement(_Star2.default, { key: index, index: index, setScore: _this2.setScore, changeTemp: _this2.changeTempScore, filled: index + 1 <= _this2.state.score || index <= _this2.state.tempScore });
        })
      );
    }
  }]);

  return Rating;
}(_react2.default.Component);

Rating.propTypes = {
  /** The total number of stars*/
  stars: _propTypes2.default.number,
  /** The current rating*/
  score: _propTypes2.default.number,
  /** Prevent the rating from being changed*/
  disabled: _propTypes2.default.bool,
  /** Callback triggered with current score*/
  onClick: _propTypes2.default.function
};
Rating.defaultProps = {
  stars: 5,
  score: 1
};

exports.default = (0, _radium2.default)(Rating);