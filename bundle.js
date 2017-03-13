'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WheelNotOutSide = function (_Component) {
	_inherits(WheelNotOutSide, _Component);

	function WheelNotOutSide(props) {
		_classCallCheck(this, WheelNotOutSide);

		var _this = _possibleConstructorReturn(this, (WheelNotOutSide.__proto__ || Object.getPrototypeOf(WheelNotOutSide)).call(this, props));

		_this.emitWheel = _this.emitWheel.bind(_this);
		return _this;
	}

	_createClass(WheelNotOutSide, [{
		key: 'emitWheel',
		value: function emitWheel(e) {
			var deltaY = e.deltaY;
			var _target = this.target,
			    scrollTop = _target.scrollTop,
			    scrollHeight = _target.scrollHeight,
			    offsetHeight = _target.offsetHeight;


			var delta = deltaY === 0 ? deltaX : deltaY;

			if (scrollTop === 0 && delta < 0 || scrollTop >= scrollHeight - offsetHeight && delta > 0) {
				e.preventDefault();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var Children = _react2.default.cloneElement(this.props.children, {
				ref: function ref(target) {
					_this2.target = target;
				},
				onWheel: this.emitWheel
			});

			return Children;
		}
	}]);

	return WheelNotOutSide;
}(_react.Component);

exports.default = WheelNotOutSide;