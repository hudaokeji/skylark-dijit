/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/topic","dojo/_base/window","../focus","../selection","../main"],function(o,e,n,r,i,t,a,c){var u={_curFocus:null,_prevFocus:null,isCollapsed:function(){return c.getBookmark().isCollapsed},getBookmark:function(){return(i.global==window?a:new a.SelectionManager(i.global)).getBookmark()},moveToBookmark:function(o){return(i.global==window?a:new a.SelectionManager(i.global)).moveToBookmark(o)},getFocus:function(o,n){var r=!t.curNode||o&&e.isDescendant(t.curNode,o.domNode)?c._prevFocus:t.curNode;return{node:r,bookmark:r&&r==t.curNode&&i.withGlobal(n||i.global,c.getBookmark),openedForWindow:n}},_activeStack:[],registerIframe:function(o){return t.registerIframe(o)},unregisterIframe:function(o){o&&o.remove()},registerWin:function(o,e){return t.registerWin(o,e)},unregisterWin:function(o){o&&o.remove()}};return t.focus=function(o){if(o){var e="node"in o?o.node:o,n=o.bookmark,r=o.openedForWindow,a=!!n&&n.isCollapsed;if(e){var u="iframe"==e.tagName.toLowerCase()?e.contentWindow:e;if(u&&u.focus)try{u.focus()}catch(o){}t._onFocusNode(e)}if(n&&i.withGlobal(r||i.global,c.isCollapsed)&&!a){r&&r.focus();try{i.withGlobal(r||i.global,c.moveToBookmark,null,[n])}catch(o){}}}},t.watch("curNode",function(o,e,n){c._curFocus=n,c._prevFocus=e,n&&r.publish("focusNode",n)}),t.watch("activeStack",function(o,e,n){c._activeStack=n}),t.on("widget-blur",function(o,e){r.publish("widgetBlur",o,e)}),t.on("widget-focus",function(o,e){r.publish("widgetFocus",o,e)}),n.mixin(c,u),c});
//# sourceMappingURL=../sourcemaps/_base/focus.js.map
