/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/keys","dojo/text!./templates/Menu.html","./_MenuBase"],function(e,t,n,o){return e("dijit.DropDownMenu",o,{templateString:n,baseClass:"dijitMenu",_onUpArrow:function(){this.focusPrev()},_onDownArrow:function(){this.focusNext()},_onRightArrow:function(e){this._moveToPopup(e),e.stopPropagation(),e.preventDefault()},_onLeftArrow:function(e){this.parentMenu?this.parentMenu._isMenuBar?this.parentMenu.focusPrev():this.onCancel(!1):(e.stopPropagation(),e.preventDefault())}})});
//# sourceMappingURL=sourcemaps/DropDownMenu.js.map
