













"use strict";
(globalThis["webpackChunk_9a9657affbddcf8366bf5802b3a3442eafe935402a406c0e52414ca6a3dccdd0"] = globalThis["webpackChunk_9a9657affbddcf8366bf5802b3a3442eafe935402a406c0e52414ca6a3dccdd0"] || []).push([[216],{

/***/ 555:
/***/ ((module) => {



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  target = requireNapi(shortName);
  if (typeof target !== 'undefined' && /@ohos/.test(moduleName)) {
    return target;
  }
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  return target;
}


/***/ })

}]);
      globalThis["__common_module_cache___9a9657affbddcf8366bf5802b3a3442eafe935402a406c0e52414ca6a3dccdd0"] = globalThis["__common_module_cache___9a9657affbddcf8366bf5802b3a3442eafe935402a406c0e52414ca6a3dccdd0"] || {};
//# sourceMappingURL=vendors.js.map