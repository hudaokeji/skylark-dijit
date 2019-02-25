/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","dojo/_base/declare","dojo/dom-class","dojo/_base/lang","dojo/number","./_Widget","./_TemplatedMixin","dojo/text!./templates/ProgressBar.html"],function(t,e,i,s,r,a,n,o){return e("dijit.ProgressBar",[a,n],{progress:"0",value:"",maximum:100,places:0,indeterminate:!1,label:"",name:"",templateString:o,_indeterminateHighContrastImagePath:t.toUrl("./themes/a11y/indeterminate_progress.gif"),postMixInProperties:function(){this.inherited(arguments),this.params&&"value"in this.params||(this.value=this.indeterminate?1/0:this.progress)},buildRendering:function(){this.inherited(arguments),this.indeterminateHighContrastImage.setAttribute("src",this._indeterminateHighContrastImagePath.toString()),this.update()},_setDirAttr:function(t){var e="rtl"==t.toLowerCase();i.toggle(this.domNode,"dijitProgressBarRtl",e),i.toggle(this.domNode,"dijitProgressBarIndeterminateRtl",this.indeterminate&&e),this.inherited(arguments)},update:function(t){s.mixin(this,t||{});var e=this.internalProgress,r=this.domNode,a=1;this.indeterminate?r.removeAttribute("aria-valuenow"):(-1!=String(this.progress).indexOf("%")?(a=Math.min(parseFloat(this.progress)/100,1),this.progress=a*this.maximum):(this.progress=Math.min(this.progress,this.maximum),a=this.maximum?this.progress/this.maximum:0),r.setAttribute("aria-valuenow",this.progress)),r.setAttribute("aria-labelledby",this.labelNode.id),r.setAttribute("aria-valuemin",0),r.setAttribute("aria-valuemax",this.maximum),this.labelNode.innerHTML=this.report(a),i.toggle(this.domNode,"dijitProgressBarIndeterminate",this.indeterminate),i.toggle(this.domNode,"dijitProgressBarIndeterminateRtl",this.indeterminate&&!this.isLeftToRight()),e.style.width=100*a+"%",this.onChange()},_setValueAttr:function(t){this._set("value",t),t==1/0?this.update({indeterminate:!0}):this.update({indeterminate:!1,progress:t})},_setLabelAttr:function(t){this._set("label",t),this.update()},_setIndeterminateAttr:function(t){this._set("indeterminate",t),this.update()},report:function(t){return this.label?this.label:this.indeterminate?"&#160;":r.format(t,{type:"percent",places:this.places,locale:this.lang})},onChange:function(){}})});
//# sourceMappingURL=sourcemaps/ProgressBar.js.map
