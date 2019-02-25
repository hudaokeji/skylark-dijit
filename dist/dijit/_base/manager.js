/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/config","dojo/_base/lang","../registry","../main"],function(i,n,e,o,a){var d={};return i.forEach(["byId","getUniqueId","findWidgets","_destroyAll","byNode","getEnclosingWidget"],function(i){d[i]=o[i]}),e.mixin(d,{defaultDuration:n.defaultDuration||200}),e.mixin(a,d),a});
//# sourceMappingURL=../sourcemaps/_base/manager.js.map
