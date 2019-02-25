/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["./ContentPane","../_TemplatedMixin","dojo/_base/declare"],function(t,i,e){return e("dijit.layout.LinkPane",[t,i],{templateString:'<div class="dijitLinkPane" data-dojo-attach-point="containerNode"></div>',postMixInProperties:function(){this.srcNodeRef&&(this.title+=this.srcNodeRef.innerHTML),this.inherited(arguments)},_fillContent:function(){}})});
//# sourceMappingURL=../sourcemaps/layout/LinkPane.js.map
