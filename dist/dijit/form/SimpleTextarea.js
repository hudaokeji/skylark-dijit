/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-class","dojo/sniff","./TextBox"],function(t,e,i,o){return t("dijit.form.SimpleTextarea",o,{baseClass:"dijitTextBox dijitTextArea",rows:"3",cols:"20",templateString:"<textarea ${!nameAttrSetting} data-dojo-attach-point='focusNode,containerNode,textbox' autocomplete='off'></textarea>",postMixInProperties:function(){!this.value&&this.srcNodeRef&&(this.value=this.srcNodeRef.value),this.inherited(arguments)},buildRendering:function(){this.inherited(arguments),i("ie")&&this.cols&&e.add(this.textbox,"dijitTextAreaCols")},filter:function(t){return t&&(t=t.replace(/\r/g,"")),this.inherited(arguments)},_onInput:function(t){if(this.maxLength){var e=parseInt(this.maxLength),o=this.textbox.value.replace(/\r/g,""),s=o.length-e;if(s>0){var n=this.textbox;if(n.selectionStart){var a=n.selectionStart,r=0;i("opera")&&(r=(this.textbox.value.substring(0,a).match(/\r/g)||[]).length),this.textbox.value=o.substring(0,a-s-r)+o.substring(a-r),n.setSelectionRange(a-s,a-s)}else if(this.ownerDocument.selection){n.focus();var c=this.ownerDocument.selection.createRange();c.moveStart("character",-s),c.text="",c.select()}}}this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/form/SimpleTextarea.js.map
