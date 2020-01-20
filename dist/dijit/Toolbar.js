/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","dojo/_base/declare","dojo/has","dojo/keys","dojo/ready","./_Widget","./_KeyNavContainer","./_TemplatedMixin"],function(require,o,e,t,i,a,r,d){return e("dijit-legacy-requires")&&i(0,function(){require(["dijit/ToolbarSeparator"])}),o("dijit.Toolbar",[a,d,r],{templateString:'<div class="dijit" role="toolbar" tabIndex="${tabIndex}" data-dojo-attach-point="containerNode"></div>',baseClass:"dijitToolbar",_onLeftArrow:function(){this.focusPrev()},_onRightArrow:function(){this.focusNext()}})});
//# sourceMappingURL=sourcemaps/Toolbar.js.map
