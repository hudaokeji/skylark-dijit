/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom","./_WidgetBase","./_TemplatedMixin","./_Contained","dojo/text!./templates/MenuSeparator.html"],function(e,t,i,n,o,d){return e("dijit.MenuSeparator",[i,n,o],{templateString:d,buildRendering:function(){this.inherited(arguments),t.setSelectable(this.domNode,!1)},isFocusable:function(){return!1}})});
//# sourceMappingURL=sourcemaps/MenuSeparator.js.map
