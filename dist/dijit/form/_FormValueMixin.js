/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/on","./_FormWidgetMixin"],function(e,t,i,n,s,o){return e("dijit.form._FormValueMixin",o,{readOnly:!1,_setReadOnlyAttr:function(e){t.set(this.focusNode,"readOnly",e),this._set("readOnly",e)},postCreate:function(){this.inherited(arguments),void 0===this._resetValue&&(this._lastValueReported=this._resetValue=this.value)},_setValueAttr:function(e,t){this._handleOnChange(e,t)},_handleOnChange:function(e,t){this._set("value",e),this.inherited(arguments)},undo:function(){this._setValueAttr(this._lastValueReported,!1)},reset:function(){this._hasBeenBlurred=!1,this._setValueAttr(this._resetValue,!0)}})});
//# sourceMappingURL=../sourcemaps/form/_FormValueMixin.js.map
