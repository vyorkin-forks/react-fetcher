'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _makeGetter = require('./makeGetter');

var _makeGetter2 = _interopRequireDefault(_makeGetter);

var _makeDecorator = require('./makeDecorator');

var _makeDecorator2 = _interopRequireDefault(_makeDecorator);

var prefetchName = 'fetchers';
var deferName = 'deferredFetchers';

exports['default'] = {
  getPrefetchedData: (0, _makeGetter2['default'])({ name: prefetchName }),
  prefetch: (0, _makeDecorator2['default'])({ name: prefetchName }),

  getDeferredData: (0, _makeGetter2['default'])({ name: deferName }),
  defer: (0, _makeDecorator2['default'])({ name: deferName })
};
module.exports = exports['default'];