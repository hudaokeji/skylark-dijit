/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","./registry"],function(e,n){return e("dijit._Contained",null,{_getSibling:function(e){var i=this.domNode;do{i=i[e+"Sibling"]}while(i&&1!=i.nodeType);return i&&n.byNode(i)},getPreviousSibling:function(){return this._getSibling("previous")},getNextSibling:function(){return this._getSibling("next")},getIndexInParent:function(){var e=this.getParent();return e&&e.getIndexOfChild?e.getIndexOfChild(this):-1}})});
//# sourceMappingURL=sourcemaps/_Contained.js.map
