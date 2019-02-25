/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/window","./main"],function(e,t,r){var i={},n={},d={length:0,add:function(e){if(n[e.id])throw new Error("Tried to register widget with id=="+e.id+" but that id is already registered");n[e.id]=e,this.length++},remove:function(e){n[e]&&(delete n[e],this.length--)},byId:function(e){return"string"==typeof e?n[e]:e},byNode:function(e){return n[e.getAttribute("widgetId")]},toArray:function(){var e=[];for(var t in n)e.push(n[t]);return e},getUniqueId:function(e){var t;do{t=e+"_"+(e in i?++i[e]:i[e]=0)}while(n[t]);return"dijit"==r._scopeName?t:r._scopeName+"_"+t},findWidgets:function(e,t){var r=[];return function e(i){for(var d=i.firstChild;d;d=d.nextSibling)if(1==d.nodeType){var o=d.getAttribute("widgetId");if(o){var u=n[o];u&&r.push(u)}else d!==t&&e(d)}}(e),r},_destroyAll:function(){r._curFocus=null,r._prevFocus=null,r._activeStack=[],e.forEach(d.findWidgets(t.body()),function(e){e._destroyed||(e.destroyRecursive?e.destroyRecursive():e.destroy&&e.destroy())})},getEnclosingWidget:function(e){for(;e;){var t=1==e.nodeType&&e.getAttribute("widgetId");if(t)return n[t];e=e.parentNode}return null},_hash:n};return r.registry=d,d});
//# sourceMappingURL=sourcemaps/registry.js.map
