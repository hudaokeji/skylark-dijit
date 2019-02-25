/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","./MenuItem","dojo/text!./templates/MenuBarItem.html"],function(e,t,n){var i=e("dijit._MenuBarItemMixin",null,{templateString:n,_setIconClassAttr:null}),a=e("dijit.MenuBarItem",[t,i],{});return a._MenuBarItemMixin=i,a});
//# sourceMappingURL=sourcemaps/MenuBarItem.js.map
