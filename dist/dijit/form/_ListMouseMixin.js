/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/on","dojo/touch","./_ListBase"],function(e,t,i,o){return e("dijit.form._ListMouseMixin",o,{postCreate:function(){this.inherited(arguments),this.domNode.dojoClick=!0,this._listConnect("click","_onClick"),this._listConnect("mousedown","_onMouseDown"),this._listConnect("mouseup","_onMouseUp"),this._listConnect("mouseover","_onMouseOver"),this._listConnect("mouseout","_onMouseOut")},_onClick:function(e,t){this._setSelectedAttr(t,!1),this._deferredClick&&this._deferredClick.remove(),this._deferredClick=this.defer(function(){this._deferredClick=null,this.onClick(t)})},_onMouseDown:function(e,t){this._hoveredNode&&(this.onUnhover(this._hoveredNode),this._hoveredNode=null),this._isDragging=!0,this._setSelectedAttr(t,!1)},_onMouseUp:function(e,t){this._isDragging=!1;var i=this.selected,o=this._hoveredNode;i&&t==i?this.defer(function(){this._onClick(e,i)}):o&&this.defer(function(){this._onClick(e,o)})},_onMouseOut:function(e,t){this._hoveredNode&&(this.onUnhover(this._hoveredNode),this._hoveredNode=null),this._isDragging&&(this._cancelDrag=(new Date).getTime()+1e3)},_onMouseOver:function(e,t){this._cancelDrag&&((new Date).getTime()>this._cancelDrag&&(this._isDragging=!1),this._cancelDrag=null);this._hoveredNode=t,this.onHover(t),this._isDragging&&this._setSelectedAttr(t,!1)}})});
//# sourceMappingURL=../sourcemaps/form/_ListMouseMixin.js.map
