import layout from './core/layout';

require("kendo/styles/web/kendo.common.core.css");
require("kendo/styles/web/kendo.default.css");

module.exports = angular.module('lumxceed', [
  'lumx',
  /* modules */
  layout.name
]);