/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-attr"],function(e,t){return e("dijit.form._ToggleButtonMixin",null,{checked:!1,_aria_attr:"aria-pressed",_onClick:function(e){var t=this.checked;this._set("checked",!t);var i=this.inherited(arguments);return this.set("checked",i?this.checked:t),i},_setCheckedAttr:function(e,i){this._set("checked",e);var h=this.focusNode||this.domNode;this._created&&t.get(h,"checked")!=!!e&&t.set(h,"checked",!!e),h.setAttribute(this._aria_attr,String(e)),this._handleOnChange(e,i)},postCreate:function(){this.inherited(arguments);var e=this.focusNode||this.domNode;this.checked&&e.setAttribute("checked","checked"),void 0===this._resetValue&&(this._lastValueReported=this._resetValue=this.checked)},reset:function(){this._hasBeenBlurred=!1,this.set("checked",this.params.checked||!1)}})});
//# sourceMappingURL=../sourcemaps/form/_ToggleButtonMixin.js.map
