/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","dojo/colors","dojo/_base/declare","dojo/_base/lang","../_Plugin","../../form/DropDownButton"],function(require,t,o,e,n,i){var r=o("dijit._editor.plugins.TextColor",n,{buttonClass:i,colorPicker:"dijit/ColorPalette",useDefaultCommand:!1,_initButton:function(){this.command=this.name,this.inherited(arguments);var t=this;this.button.loadDropDown=function(o){function e(e){t.button.dropDown=new e({dir:t.editor.dir,ownerDocument:t.editor.ownerDocument,value:t.value,onChange:function(o){t.editor.execCommand(t.command,o)},onExecute:function(){t.editor.execCommand(t.command,this.get("value"))}}),o()}"string"==typeof t.colorPicker?require([t.colorPicker],e):e(t.colorPicker)}},updateState:function(){var o=this.editor,e=this.command;if(o&&o.isLoaded&&e.length){if(this.button){var n,i=this.get("disabled");if(this.button.set("disabled",i),i)return;try{n=o.queryCommandValue(e)||""}catch(t){n=""}}""==n&&(n="#000000"),"transparent"==n&&(n="#ffffff"),"string"==typeof n?n.indexOf("rgb")>-1&&(n=t.fromRgb(n).toHex()):(n=(n=(255&n)<<16|65280&n|(16711680&n)>>>16).toString(16),n="#000000".slice(0,7-n.length)+n),this.value=n;var r=this.button.dropDown;r&&r.get&&n!==r.get("value")&&r.set("value",n,!1)}}});return n.registry.foreColor=function(t){return new r(t)},n.registry.hiliteColor=function(t){return new r(t)},r});
//# sourceMappingURL=../../sourcemaps/_editor/plugins/TextColor.js.map
