/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/keys","dojo/_base/lang","../_TimePicker","./_DateTimeTextBox"],function(e,i,t,s,o){return e("dijit.form.TimeTextBox",o,{baseClass:"dijitTextBox dijitComboBox dijitTimeTextBox",popupClass:s,_selector:"time",value:new Date(""),maxHeight:-1,_onKey:function(e){if(!this.disabled&&!this.readOnly)switch(this.inherited(arguments),e.keyCode){case i.ENTER:case i.TAB:case i.ESCAPE:case i.DOWN_ARROW:case i.UP_ARROW:break;default:this.defer(function(){var e=this.get("displayedValue");this.filterString=e&&!this.parse(e,this.constraints)?e.toLowerCase():"",this._opened&&this.closeDropDown(),this.openDropDown()})}}})});
//# sourceMappingURL=../sourcemaps/form/TimeTextBox.js.map
