/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","dojo/_base/declare","dojo/dom-attr","dojo/has","dojo/query","dojo/ready","./ToggleButton","./_CheckBoxMixin","dojo/text!./templates/CheckBox.html","dojo/NodeList-dom","../a11yclick"],function(require,t,e,i,o,s,d,n,r){return i("dijit-legacy-requires")&&s(0,function(){require(["dijit/form/RadioButton"])}),t("dijit.form.CheckBox",[d,n],{templateString:r,baseClass:"dijitCheckBox",_setValueAttr:function(t,e){"string"==typeof t&&(this.inherited(arguments),t=!0),this._created&&this.set("checked",t,e)},_getValueAttr:function(){return this.checked&&this._get("value")},_setIconClassAttr:null,_setNameAttr:"focusNode",postMixInProperties:function(){this.inherited(arguments),this.checkedAttrSetting=""},_fillContent:function(){},_onFocus:function(){this.id&&o("label[for='"+this.id+"']").addClass("dijitFocusedLabel"),this.inherited(arguments)},_onBlur:function(){this.id&&o("label[for='"+this.id+"']").removeClass("dijitFocusedLabel"),this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/form/CheckBox.js.map
