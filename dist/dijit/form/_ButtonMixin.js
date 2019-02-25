/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom","dojo/has","../registry"],function(t,e,i,o){var n=t("dijit.form._ButtonMixin"+(i("dojo-bidi")?"_NoBidi":""),null,{label:"",type:"button",__onClick:function(t){return t.stopPropagation(),t.preventDefault(),this.disabled||this.valueNode.click(t),!1},_onClick:function(t){if(this.disabled)return t.stopPropagation(),t.preventDefault(),!1;!1===this.onClick(t)&&t.preventDefault();var e=t.defaultPrevented;if(!e&&"submit"==this.type&&!(this.valueNode||this.focusNode).form)for(var i=this.domNode;i.parentNode;i=i.parentNode){var n=o.byNode(i);if(n&&"function"==typeof n._onSubmit){n._onSubmit(t),t.preventDefault(),e=!0;break}}return!e},postCreate:function(){this.inherited(arguments),e.setSelectable(this.focusNode,!1)},onClick:function(){return!0},_setLabelAttr:function(t){this._set("label",t),(this.containerNode||this.focusNode).innerHTML=t}});return i("dojo-bidi")&&(n=t("dijit.form._ButtonMixin",n,{_setLabelAttr:function(){this.inherited(arguments);var t=this.containerNode||this.focusNode;this.applyTextDir(t)}})),n});
//# sourceMappingURL=../sourcemaps/form/_ButtonMixin.js.map
