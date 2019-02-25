/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/query!css2","dijit/TitlePane","dojo/text!./templates/Fieldset.html","./a11yclick"],function(e,t,i,n){return e("dijit.Fieldset",i,{baseClass:"dijitFieldset",title:"",open:!0,templateString:n,postCreate:function(){if(!this.title){var e=t("legend",this.containerNode);e.length&&(this.set("title",e[0].innerHTML),e[0].parentNode.removeChild(e[0]))}this.inherited(arguments)}})});
//# sourceMappingURL=sourcemaps/Fieldset.js.map
