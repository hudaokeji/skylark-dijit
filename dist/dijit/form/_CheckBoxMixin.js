/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-attr"],function(t,e){return t("dijit.form._CheckBoxMixin",null,{type:"checkbox",value:"on",readOnly:!1,_aria_attr:"aria-checked",_setReadOnlyAttr:function(t){this._set("readOnly",t),e.set(this.focusNode,"readOnly",t)},_setLabelAttr:void 0,_getSubmitValue:function(t){return null==t||""===t?"on":t},_setValueAttr:function(t){t=this._getSubmitValue(t),this._set("value",t),e.set(this.focusNode,"value",t)},reset:function(){this.inherited(arguments),this._set("value",this._getSubmitValue(this.params.value)),e.set(this.focusNode,"value",this.value)},_onClick:function(t){return this.readOnly?(t.stopPropagation(),t.preventDefault(),!1):this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/form/_CheckBoxMixin.js.map
