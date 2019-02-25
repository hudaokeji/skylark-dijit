/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","dojo/colors","dojo/_base/declare","dojo/_base/lang","../_Plugin","../../form/DropDownButton"],function(t,o,e,n,i,r){var a=e("dijit._editor.plugins.TextColor",i,{buttonClass:r,colorPicker:"dijit/ColorPalette",useDefaultCommand:!1,_initButton:function(){this.command=this.name,this.inherited(arguments);var o=this;this.button.loadDropDown=function(e){function n(t){o.button.dropDown=new t({dir:o.editor.dir,ownerDocument:o.editor.ownerDocument,value:o.value,onChange:function(t){o.editor.execCommand(o.command,t)},onExecute:function(){o.editor.execCommand(o.command,this.get("value"))}}),e()}"string"==typeof o.colorPicker?t([o.colorPicker],n):n(o.colorPicker)}},updateState:function(){var t=this.editor,e=this.command;if(t&&t.isLoaded&&e.length){if(this.button){var n,i=this.get("disabled");if(this.button.set("disabled",i),i)return;try{n=t.queryCommandValue(e)||""}catch(t){n=""}}""==n&&(n="#000000"),"transparent"==n&&(n="#ffffff"),"string"==typeof n?n.indexOf("rgb")>-1&&(n=o.fromRgb(n).toHex()):(n=(n=(255&n)<<16|65280&n|(16711680&n)>>>16).toString(16),n="#000000".slice(0,7-n.length)+n),this.value=n;var r=this.button.dropDown;r&&r.get&&n!==r.get("value")&&r.set("value",n,!1)}}});return i.registry.foreColor=function(t){return new a(t)},i.registry.hiliteColor=function(t){return new a(t)},a});
//# sourceMappingURL=../../sourcemaps/_editor/plugins/TextColor.js.map
