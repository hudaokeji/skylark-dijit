/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-class","./MenuItem","dojo/text!./templates/CheckedMenuItem.html","./hccss"],function(e,t,c,i){return e("dijit.CheckedMenuItem",c,{baseClass:"dijitMenuItem dijitCheckedMenuItem",templateString:i,checked:!1,_setCheckedAttr:function(e){this.domNode.setAttribute("aria-checked",e?"true":"false"),this._set("checked",e)},iconClass:"",role:"menuitemcheckbox",checkedChar:"&#10003;",onChange:function(){},_onClick:function(e){this.disabled||(this.set("checked",!this.checked),this.onChange(this.checked)),this.onClick(e)}})});
//# sourceMappingURL=sourcemaps/CheckedMenuItem.js.map
