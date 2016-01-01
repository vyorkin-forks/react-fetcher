'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = function (_ref) {
  var name = _ref.name;
  return function (fetchers) {
    return function (ComposedComponent) {
      ComposedComponent[name] = fetchers;
      return ComposedComponent;
    };
  };
};

module.exports = exports['default'];