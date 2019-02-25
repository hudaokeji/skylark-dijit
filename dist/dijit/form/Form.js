/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-attr","dojo/_base/kernel","dojo/sniff","../_Widget","../_TemplatedMixin","./_FormMixin","../layout/_ContentPaneResizeMixin"],function(t,e,n,o,i,r,a,s){return t("dijit.form.Form",[i,r,a,s],{name:"",action:"",method:"",encType:"","accept-charset":"",accept:"",target:"",templateString:"<form data-dojo-attach-point='containerNode' data-dojo-attach-event='onreset:_onReset,onsubmit:_onSubmit' ${!nameAttrSetting}></form>",postMixInProperties:function(){this.nameAttrSetting=this.name?"name='"+this.name+"'":"",this.inherited(arguments)},execute:function(){},onExecute:function(){},_setEncTypeAttr:function(t){e.set(this.domNode,"encType",t),o("ie")&&(this.domNode.encoding=t),this._set("encType",t)},reset:function(t){var e={returnValue:!0,preventDefault:function(){this.returnValue=!1},stopPropagation:function(){},currentTarget:t?t.target:this.domNode,target:t?t.target:this.domNode};!1!==this.onReset(e)&&e.returnValue&&this.inherited(arguments,[])},onReset:function(){return!0},_onReset:function(t){return this.reset(t),t.stopPropagation(),t.preventDefault(),!1},_onSubmit:function(t){var e=this.constructor.prototype;this.execute==e.execute&&this.onExecute==e.onExecute||(n.deprecated("dijit.form.Form:execute()/onExecute() are deprecated. Use onSubmit() instead.","","2.0"),this.onExecute(),this.execute(this.getValues())),!1===this.onSubmit(t)&&(t.stopPropagation(),t.preventDefault())},onSubmit:function(){return this.isValid()},submit:function(){!1!==this.onSubmit()&&this.containerNode.submit()}})});
//# sourceMappingURL=../sourcemaps/form/Form.js.map
