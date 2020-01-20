/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/config","dojo/_base/lang","../registry","../_dijit"],function(i,e,n,o,d){var exports={};return i.forEach(["byId","getUniqueId","findWidgets","_destroyAll","byNode","getEnclosingWidget"],function(i){exports[i]=o[i]}),n.mixin(exports,{defaultDuration:e.defaultDuration||200}),n.mixin(d,exports),d});
//# sourceMappingURL=../sourcemaps/_base/manager.js.map
