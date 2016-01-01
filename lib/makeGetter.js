'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (_ref) {
  var name = _ref.name;
  return function (components, locals) {
    var promises = (Array.isArray(components) ? components : [components]).filter(function (component) {
      return component;
    })
    // Get component fetcher functions
    .map(function (component) {
      return { component: component, fetcher: component[name] };
    })

    // Filter out components that haven't been decorated
    .filter(function (_ref2) {
      var fetcher = _ref2.fetcher;
      return fetcher;
    })

    // Calculate locals if required, execute fetchers and store promises
    .map(function (_ref3) {
      var component = _ref3.component;
      var fetcher = _ref3.fetcher;
      return typeof locals === 'function' ? fetcher(locals(component)) : fetcher(locals);
    });

    return Promise.all(promises);
  };
};

module.exports = exports['default'];