/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/aspect","dojo/_base/declare","dojo/dom-class","dojo/_base/lang","dojo/on","dojo/touch"],function(t,e,n,o,i,s){return e("dijit.tree._dndContainer",null,{constructor:function(e,r){this.tree=e,this.node=e.domNode,o.mixin(this,r),this.containerState="",n.add(this.node,"dojoDndContainer"),this.events=[i(this.node,s.enter,o.hitch(this,"onOverEvent")),i(this.node,s.leave,o.hitch(this,"onOutEvent")),t.after(this.tree,"_onNodeMouseEnter",o.hitch(this,"onMouseOver"),!0),t.after(this.tree,"_onNodeMouseLeave",o.hitch(this,"onMouseOut"),!0),i(this.node,"dragstart, selectstart",function(t){t.preventDefault()})]},destroy:function(){for(var t;t=this.events.pop();)t.remove();this.node=this.parent=null},onMouseOver:function(t){this.current=t},onMouseOut:function(){this.current=null},_changeState:function(t,e){var o="dojoDnd"+t,i=t.toLowerCase()+"State";n.replace(this.node,o+e,o+this[i]),this[i]=e},_addItemClass:function(t,e){n.add(t,"dojoDndItem"+e)},_removeItemClass:function(t,e){n.remove(t,"dojoDndItem"+e)},onOverEvent:function(){this._changeState("Container","Over")},onOutEvent:function(){this._changeState("Container","")}})});
//# sourceMappingURL=../sourcemaps/tree/_dndContainer.js.map
