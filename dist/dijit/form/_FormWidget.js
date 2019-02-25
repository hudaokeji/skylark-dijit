/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/sniff","dojo/_base/kernel","dojo/ready","../_Widget","../_CssStateMixin","../_TemplatedMixin","./_FormWidgetMixin"],function(e,t,i,d,s,a,n,r){return t("dijit-legacy-requires")&&d(0,function(){require(["dijit/form/_FormValueWidget"])}),e("dijit.form._FormWidget",[s,n,a,r],{setDisabled:function(e){i.deprecated("setDisabled("+e+") is deprecated. Use set('disabled',"+e+") instead.","","2.0"),this.set("disabled",e)},setValue:function(e){i.deprecated("dijit.form._FormWidget:setValue("+e+") is deprecated.  Use set('value',"+e+") instead.","","2.0"),this.set("value",e)},getValue:function(){return i.deprecated(this.declaredClass+"::getValue() is deprecated. Use get('value') instead.","","2.0"),this.get("value")},postMixInProperties:function(){this.nameAttrSetting=this.name&&!t("msapp")?'name="'+this.name.replace(/"/g,"&quot;")+'"':"",this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/form/_FormWidget.js.map
