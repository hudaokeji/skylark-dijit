/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/keys","./_MenuBase","dojo/text!./templates/MenuBar.html"],function(e,o,t,i){return e("dijit.MenuBar",t,{templateString:i,baseClass:"dijitMenuBar",popupDelay:0,_isMenuBar:!0,_orient:["below"],_moveToPopup:function(e){this.focusedChild&&this.focusedChild.popup&&!this.focusedChild.disabled&&this.onItemClick(this.focusedChild,e)},focusChild:function(e){this.inherited(arguments),this.activated&&e.popup&&!e.disabled&&this._openItemPopup(e,!0)},_onChildDeselect:function(e){this.currentPopupItem==e&&(this.currentPopupItem=null,e._closePopup()),this.inherited(arguments)},_onLeftArrow:function(){this.focusPrev()},_onRightArrow:function(){this.focusNext()},_onDownArrow:function(e){this._moveToPopup(e)},_onUpArrow:function(){},onItemClick:function(e,t){!e.popup||!e.popup.isShowingNow||/^key/.test(t.type)&&t.keyCode===o.DOWN_ARROW?this.inherited(arguments):(e.focusNode.focus(),this._cleanUp(!0))}})});
//# sourceMappingURL=sourcemaps/MenuBar.js.map
