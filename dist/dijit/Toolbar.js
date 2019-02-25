/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","dojo/_base/declare","dojo/has","dojo/keys","dojo/ready","./_Widget","./_KeyNavContainer","./_TemplatedMixin"],function(o,e,t,i,a,r,d,n){return t("dijit-legacy-requires")&&a(0,function(){o(["dijit/ToolbarSeparator"])}),e("dijit.Toolbar",[r,n,d],{templateString:'<div class="dijit" role="toolbar" tabIndex="${tabIndex}" data-dojo-attach-point="containerNode"></div>',baseClass:"dijitToolbar",_onLeftArrow:function(){this.focusPrev()},_onRightArrow:function(){this.focusNext()}})});
//# sourceMappingURL=sourcemaps/Toolbar.js.map
