/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-style","dojo/_base/kernel","dojo/_base/lang","dojo/on","../_Plugin","../../form/ToggleButton"],function(t,i,e,o,n,r,s){var d=t("dijit._editor.plugins.ToggleDir",r,{useDefaultCommand:!1,command:"toggleDir",buttonClass:s,_initButton:function(){this.inherited(arguments);var t=this.button,i=this.editor.isLeftToRight();this.own(this.button.on("change",o.hitch(this,function(t){this.editor.set("textDir",i^t?"ltr":"rtl")})));var e=i?"ltr":"rtl";function n(i){t.set("checked",i&&i!==e,!1)}n(this.editor.get("textDir")),this.editor.watch("textDir",function(t,i,e){n(e)})},updateState:function(){this.button.set("disabled",this.get("disabled"))}});return r.registry.toggleDir=function(){return new d({command:"toggleDir"})},d});
//# sourceMappingURL=../../sourcemaps/_editor/plugins/ToggleDir.js.map
