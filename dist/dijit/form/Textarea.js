/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-style","./_ExpandingTextAreaMixin","./SimpleTextarea"],function(e,i,o,t){return e("dijit.form.Textarea",[t,o],{baseClass:"dijitTextBox dijitTextArea dijitExpandingTextArea",cols:"",buildRendering:function(){this.inherited(arguments),i.set(this.textbox,{overflowY:"hidden",overflowX:"auto",boxSizing:"border-box",MsBoxSizing:"border-box",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box"})}})});
//# sourceMappingURL=../sourcemaps/form/Textarea.js.map
