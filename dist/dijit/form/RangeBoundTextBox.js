/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/i18n","./MappedTextBox","dojo/i18n!./nls/validate"],function(i,e,t){return i("dijit.form.RangeBoundTextBox",t,{rangeMessage:"",rangeCheck:function(i,e){return!("min"in e&&!(this.compare(i,e.min)>=0)||"max"in e&&!(this.compare(i,e.max)<=0))},isInRange:function(){return this.rangeCheck(this.get("value"),this.constraints)},_isDefinitelyOutOfRange:function(){var i=this.get("value");if(null==i)return!1;var e=!1;if("min"in this.constraints){var t=this.constraints.min;e=this.compare(i,"number"==typeof t&&t>=0&&0!=i?0:t)<0}if(!e&&"max"in this.constraints){var n=this.constraints.max;e=this.compare(i,"number"!=typeof n||n>0?n:0)>0}return e},_isValidSubset:function(){return this.inherited(arguments)&&!this._isDefinitelyOutOfRange()},isValid:function(i){return this.inherited(arguments)&&(this._isEmpty(this.textbox.value)&&!this.required||this.isInRange(i))},getErrorMessage:function(i){var e=this.get("value");return null==e||""===e||"number"==typeof e&&isNaN(e)||this.isInRange(i)?this.inherited(arguments):this.rangeMessage},postMixInProperties:function(){this.inherited(arguments),this.rangeMessage||(this.messages=e.getLocalization("dijit.form","validate",this.lang),this.rangeMessage=this.messages.rangeMessage)}})});
//# sourceMappingURL=../sourcemaps/form/RangeBoundTextBox.js.map
