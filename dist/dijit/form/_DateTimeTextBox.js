/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/date","dojo/date/locale","dojo/date/stamp","dojo/_base/declare","dojo/_base/lang","./RangeBoundTextBox","../_HasDropDown","dojo/text!./templates/DropDownBox.html"],function(t,e,i,s,a,n,o,r){return new Date("X"),s("dijit.form._DateTimeTextBox",[n,o],{templateString:r,hasDownArrow:!0,cssStateNodes:{_buttonNode:"dijitDownArrowButton"},_unboundedConstraints:{},pattern:e.regexp,datePackage:"",postMixInProperties:function(){this.inherited(arguments),this._set("type","text")},compare:function(e,i){var s=this._isInvalidDate(e),a=this._isInvalidDate(i);if(s||a)return s&&a?0:s?-1:1;var n=this.format(e,this._unboundedConstraints),o=this.format(i,this._unboundedConstraints),r=this.parse(n,this._unboundedConstraints),d=this.parse(o,this._unboundedConstraints);return n==o?0:t.compare(r,d,this._selector)},autoWidth:!0,format:function(t,e){return t?this.dateLocaleModule.format(t,e):""},parse:function(t,e){return this.dateLocaleModule.parse(t,e)||(this._isEmpty(t)?null:void 0)},serialize:function(t,e){return t.toGregorian&&(t=t.toGregorian()),i.toISOString(t,e)},dropDownDefaultValue:new Date,value:new Date(""),_blankValue:null,popupClass:"",_selector:"",constructor:function(i){i=i||{},this.dateModule=i.datePackage?a.getObject(i.datePackage,!1):t,this.dateClassObj=this.dateModule.Date||Date,this.dateClassObj instanceof Date||(this.value=new this.dateClassObj(this.value)),this.dateLocaleModule=i.datePackage?a.getObject(i.datePackage+".locale",!1):e,this._set("pattern",this.dateLocaleModule.regexp),this._invalidDate=this.constructor.prototype.value.toString()},buildRendering:function(){this.inherited(arguments),this.hasDownArrow||(this._buttonNode.style.display="none"),this.hasDownArrow||(this._buttonNode=this.domNode,this.baseClass+=" dijitComboBoxOpenOnClick")},_setConstraintsAttr:function(t){t.selector=this._selector,t.fullYear=!0;var e=i.fromISOString;"string"==typeof t.min&&(t.min=e(t.min),this.dateClassObj instanceof Date||(t.min=new this.dateClassObj(t.min))),"string"==typeof t.max&&(t.max=e(t.max),this.dateClassObj instanceof Date||(t.max=new this.dateClassObj(t.max))),this.inherited(arguments),this._unboundedConstraints=a.mixin({},this.constraints,{min:null,max:null})},_isInvalidDate:function(t){return!t||isNaN(t)||"object"!=typeof t||t.toString()==this._invalidDate},_setValueAttr:function(t,e,s){void 0!==t&&("string"==typeof t&&(t=i.fromISOString(t)),this._isInvalidDate(t)&&(t=null),t instanceof Date&&!(this.dateClassObj instanceof Date)&&(t=new this.dateClassObj(t))),this.inherited(arguments,[t,e,s]),this.value instanceof Date&&(this.filterString=""),this.dropDown&&this.dropDown.set("value",t,!1)},_set:function(t,e){if("value"==t){e instanceof Date&&!(this.dateClassObj instanceof Date)&&(e=new this.dateClassObj(e));var i=this._get("value");if(i instanceof this.dateClassObj&&0==this.compare(e,i))return}this.inherited(arguments)},_setDropDownDefaultValueAttr:function(t){this._isInvalidDate(t)&&(t=new this.dateClassObj),this._set("dropDownDefaultValue",t)},openDropDown:function(t){this.dropDown&&this.dropDown.destroy();var e=a.isString(this.popupClass)?a.getObject(this.popupClass,!1):this.popupClass,i=this,s=this.get("value");this.dropDown=new e({onChange:function(t){i.set("value",t,!0)},id:this.id+"_popup",dir:i.dir,lang:i.lang,value:s,textDir:i.textDir,currentFocus:this._isInvalidDate(s)?this.dropDownDefaultValue:s,constraints:i.constraints,filterString:i.filterString,datePackage:i.datePackage,isDisabledDate:function(t){return!i.rangeCheck(t,i.constraints)}}),this.inherited(arguments)},_getDisplayedValueAttr:function(){return this.textbox.value},_setDisplayedValueAttr:function(t,e){this._setValueAttr(this.parse(t,this.constraints),e,t)}})});
//# sourceMappingURL=../sourcemaps/form/_DateTimeTextBox.js.map
