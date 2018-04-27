'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function Section(props) {
  return _react2.default.createElement(_Section2.default, props);
};

// Section.propTypes = {
//   /** The index of the current index */
//   activeIndex: PropTypes.string,
//   /** Indicate whether there should only be pne panel open */
//   exclusive: PropTypes.bool,
//   /** retuyghdfgjhdsgfjhd */
//   test: PropTypes.bool
// };

/** A super lame component that says Hello with a custom message. */

var Accordion = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeIndex: []
    }, _this.handleClick = function (index) {
      if (_this.props.exclusive) {
        _this.setState(function (_ref2) {
          var activeIndex = _ref2.activeIndex;
          return { activeIndex: activeIndex.includes(index) ? [] : [index] };
        });
      } else {
        _this.setState(function (_ref3) {
          var activeIndex = _ref3.activeIndex;

          return activeIndex.includes(index) ? { activeIndex: activeIndex.filter(function (nums) {
              return nums !== index;
            }) } : { activeIndex: [].concat(_toConsumableArray(activeIndex), [index]) };
        });
      }
    }, _this.getProps = function () {
      return {
        handleClick: _this.handleClick,
        activeIndex: _this.state.activeIndex
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // static Content = Content


  _createClass(Accordion, [{
    key: 'render',
    value: function render() {
      var getProps = this.getProps;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { borderRadius: '8px', border: '2px solid #ccc', width: this.props.width } },
          this.props.children({ getProps: getProps })
        )
      );
    }
  }]);

  return Accordion;
}(_react.Component);

Accordion.Section = Section;


Accordion.propTypes = {
  /** The index of the current index */
  activeIndex: _propTypes2.default.array,
  /** Indicate whether there should only be pne panel open */
  exclusive: _propTypes2.default.bool,
  /** retuyghdfgjhdsgfjhd */
  width: _propTypes2.default.string
};
Accordion.defaultProps = {
  exclusive: true,
  width: '100%'
};

exports.default = Accordion;