/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom","./_Widget","./_TemplatedMixin"],function(e,i,t,o){return e("dijit.ToolbarSeparator",[t,o],{templateString:'<div class="dijitToolbarSeparator dijitInline" role="presentation"></div>',buildRendering:function(){this.inherited(arguments),i.setSelectable(this.domNode,!1)},isFocusable:function(){return!1}})});
//# sourceMappingURL=sourcemaps/ToolbarSeparator.js.map
