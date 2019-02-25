/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","./a11y"],function(t,e){return t("dijit._DialogMixin",null,{actionBarTemplate:"",execute:function(){},onCancel:function(){},onExecute:function(){},_onSubmit:function(){this.onExecute(),this.execute(this.get("value"))},_getFocusItems:function(){var t=e._getTabNavigable(this.domNode);this._firstFocusItem=t.lowest||t.first||this.closeButtonNode||this.domNode,this._lastFocusItem=t.last||t.highest||this._firstFocusItem}})});
//# sourceMappingURL=sourcemaps/_DialogMixin.js.map
