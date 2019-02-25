/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/dom-class","dojo/_base/window","../popup","../BackgroundIframe"],function(e,o,n){var r=n._createWrapper;n._createWrapper=function(n){return n.declaredClass||(n={_popupWrapper:n.parentNode&&e.contains(n.parentNode,"dijitPopup")?n.parentNode:null,domNode:n,destroy:function(){},ownerDocument:n.ownerDocument,ownerDocumentBody:o.body(n.ownerDocument)}),r.call(this,n)};var t=n.open;return n.open=function(e){if(e.orient&&"string"!=typeof e.orient&&!("length"in e.orient)){var o=[];for(var n in e.orient)o.push({aroundCorner:n,corner:e.orient[n]});e.orient=o}return t.call(this,e)},n});
//# sourceMappingURL=../sourcemaps/_base/popup.js.map
