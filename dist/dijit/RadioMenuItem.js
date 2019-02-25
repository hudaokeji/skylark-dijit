/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/query!css2","./CheckedMenuItem","./registry"],function(e,t,i,o,s,d){return t("dijit.RadioButtonMenuItem",s,{baseClass:"dijitMenuItem dijitRadioMenuItem",role:"menuitemradio",checkedChar:"*",group:"",_setGroupAttr:"domNode",_setCheckedAttr:function(t){this.inherited(arguments),this._created&&t&&this.group&&e.forEach(this._getRelatedWidgets(),function(e){e!=this&&e.checked&&e.set("checked",!1)},this)},_onClick:function(e){this.disabled||this.checked||(this.set("checked",!0),this.onChange(!0)),this.onClick(e)},_getRelatedWidgets:function(){var e=[];return o("[group="+this.group+"][role="+this.role+"]").forEach(function(t){var i=d.getEnclosingWidget(t);i&&e.push(i)}),e}})});
//# sourceMappingURL=sourcemaps/RadioMenuItem.js.map
