/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/on","dojo/_base/array","dojo/keys","dojo/_base/declare","dojo/has","./a11yclick"],function(i,n,o,c,e,d){var t=c("dijit._OnDijitClickMixin",null,{connect:function(i,n,o){return this.inherited(arguments,[i,"ondijitclick"==n?d:n,o])}});return t.a11yclick=d,t});
//# sourceMappingURL=sourcemaps/_OnDijitClickMixin.js.map
