/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/dom-class","dojo/has","dojo/_base/lang","dojo/on","dojo/domReady","dojo/touch","dojo/_base/window","./a11yclick","./registry"],function(e,t,s,o,a,i,c,n,r,d,u,h){var f=t("dijit._CssStateMixin",[],{hovering:!1,active:!1,_applyAttributes:function(){for(var t in this.inherited(arguments),e.forEach(["disabled","readOnly","checked","selected","focused","state","hovering","active","_opened"],function(e){this.watch(e,i.hitch(this,"_setStateClass"))},this),this.cssStateNodes||{})this._trackMouseState(this[t],this.cssStateNodes[t]);this._trackMouseState(this.domNode,this.baseClass),this._setStateClass()},_cssMouseEvent:function(e){if(!this.disabled)switch(e.type){case"mouseover":case"MSPointerOver":case"pointerover":this._set("hovering",!0),this._set("active",this._mouseDown);break;case"mouseout":case"MSPointerOut":case"pointerout":this._set("hovering",!1),this._set("active",!1);break;case"mousedown":case"touchstart":case"MSPointerDown":case"pointerdown":case"keydown":this._set("active",!0);break;case"mouseup":case"dojotouchend":case"MSPointerUp":case"pointerup":case"keyup":this._set("active",!1)}},_setStateClass:function(){var t=this.baseClass.split(" ");function s(s){t=t.concat(e.map(t,function(e){return e+s}),"dijit"+s)}this.isLeftToRight()||s("Rtl");var o="mixed"==this.checked?"Mixed":this.checked?"Checked":"";this.checked&&s(o),this.state&&s(this.state),this.selected&&s("Selected"),this._opened&&s("Opened"),this.disabled?s("Disabled"):this.readOnly?s("ReadOnly"):this.active?s("Active"):this.hovering&&s("Hover"),this.focused&&s("Focused");var a=this.stateNode||this.domNode,i={};e.forEach(a.className.split(" "),function(e){i[e]=!0}),"_stateClasses"in this&&e.forEach(this._stateClasses,function(e){delete i[e]}),e.forEach(t,function(e){i[e]=!0});var c=[];for(var n in i)c.push(n);a.className=c.join(" "),this._stateClasses=t},_subnodeCssMouseEvent:function(e,t,s){if(!this.disabled&&!this.readOnly)switch(s.type){case"mouseover":case"MSPointerOver":case"pointerover":a(!0);break;case"mouseout":case"MSPointerOut":case"pointerout":a(!1),i(!1);break;case"mousedown":case"touchstart":case"MSPointerDown":case"pointerdown":case"keydown":i(!0);break;case"mouseup":case"MSPointerUp":case"pointerup":case"dojotouchend":case"keyup":i(!1);break;case"focus":case"focusin":c(!0);break;case"blur":case"focusout":c(!1)}function a(s){o.toggle(e,t+"Hover",s)}function i(s){o.toggle(e,t+"Active",s)}function c(s){o.toggle(e,t+"Focused",s)}},_trackMouseState:function(e,t){e._cssState=t}});return n(function(){function e(e,t,o){if(!o||!s.isDescendant(o,t))for(var a=t;a&&a!=o;a=a.parentNode)if(a._cssState){var i=h.getEnclosingWidget(a);i&&(a==i.domNode?i._cssMouseEvent(e):i._subnodeCssMouseEvent(a,a._cssState,e))}}var t,o=d.body();c(o,r.over,function(t){e(t,t.target,t.relatedTarget)}),c(o,r.out,function(t){e(t,t.target,t.relatedTarget)}),c(o,u.press,function(s){e(s,t=s.target)}),c(o,u.release,function(s){e(s,t),t=null}),c(o,"focusin, focusout",function(e){var t=e.target;if(t._cssState&&!t.getAttribute("widgetId")){var s=h.getEnclosingWidget(t);s&&s._subnodeCssMouseEvent(t,t._cssState,e)}})}),f});
//# sourceMappingURL=sourcemaps/_CssStateMixin.js.map
