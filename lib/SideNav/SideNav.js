'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inactiveStyle = { borderLeft: "6px solid #f8fafb", background: '#FFFFFF', display: 'flex', paddingTop: '15px', height: '40px', paddingBottom: '15px', flexDirection: 'row', width: '174px', alignItems: 'center' };
var activeStyle = { borderLeft: "6px solid #6bada7", background: '#F8FAFB', display: 'flex', paddingTop: '15px', height: '36px', paddingBottom: '15px', borderTop: "2px solid #ccc", borderBottom: "2px solid #ccc", width: '178px', alignItems: 'center' };

var Tab = function Tab(_ref) {
	var title = _ref.title,
	    active = _ref.active;

	return _react2.default.createElement(
		'div',
		{ style: Object.assign({}, active ? activeStyle : inactiveStyle, { fontWeight: "500", color: "rgb(88,88,88)", textDecoration: 'none' }) },
		title
	);
};

var SideNav = function (_Component) {
	_inherits(SideNav, _Component);

	function SideNav() {
		_classCallCheck(this, SideNav);

		return _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).apply(this, arguments));
	}

	_createClass(SideNav, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: { minHeight: '100vh', textDecoration: 'none', paddingTop: '10px', borderRight: '2px solid #ccc', display: 'flex', flexDirection: 'column', width: '180px', background: 'white', alignItems: "center" } },
				this.props.children
			);
		}
	}]);

	return SideNav;
}(_react.Component);

SideNav.Tab = Tab;


SideNav.propTypes = {
	/** Message to display */
	message: _propTypes2.default.string
};

SideNav.defaultProps = {
	message: 'World'
};

Tab.propTypes = {
	/** Message to display */
	testy: _propTypes2.default.string
};

Tab.defaultProps = {
	testy: 'World'
};

exports.default = SideNav;