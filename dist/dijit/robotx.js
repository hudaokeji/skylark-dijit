/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/robotx"],function(o,i){o.experimental("dijit.robotx");var t=i._updateDocument;i._updateDocument=function(){t();var i=o.global;i.dijit&&(window.dijit=i.dijit)}});
//# sourceMappingURL=sourcemaps/robotx.js.map
