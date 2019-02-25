/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-style","dojo/_base/lang","../_WidgetBase","./_LayoutWidget","./utils"],function(t,e,i,o,n,r,d,s){var a=e("dijit.layout.LayoutContainer",d,{design:"headline",baseClass:"dijitLayoutContainer",startup:function(){this._started||(t.forEach(this.getChildren(),this._setupChild,this),this.inherited(arguments))},_setupChild:function(t){this.inherited(arguments),t.region&&i.add(t.domNode,this.baseClass+"Pane")},_getOrderedChildren:function(){var e=t.map(this.getChildren(),function(t,e){return{pane:t,weight:["center"==t.region?1/0:0,t.layoutPriority,("sidebar"==this.design?1:-1)*(/top|bottom/.test(t.region)?1:-1),e]}},this);return e.sort(function(t,e){for(var i=t.weight,o=e.weight,n=0;n<i.length;n++)if(i[n]!=o[n])return i[n]-o[n];return 0}),t.map(e,function(t){return t.pane})},layout:function(){s.layoutChildren(this.domNode,this._contentBox,this._getOrderedChildren())},addChild:function(t,e){this.inherited(arguments),this._started&&this.layout()},removeChild:function(t){this.inherited(arguments),this._started&&this.layout(),i.remove(t.domNode,this.baseClass+"Pane"),o.set(t.domNode,{top:"auto",bottom:"auto",left:"auto",right:"auto",position:"static"}),o.set(t.domNode,/top|bottom/.test(t.region)?"width":"height","auto")}});return a.ChildWidgetProperties={region:"",layoutAlign:"",layoutPriority:0},n.extend(r,a.ChildWidgetProperties),a});
//# sourceMappingURL=../sourcemaps/layout/LayoutContainer.js.map
