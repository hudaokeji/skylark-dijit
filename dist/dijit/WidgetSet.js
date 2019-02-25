/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/kernel","./registry"],function(h,t,r,i){var s=t("dijit.WidgetSet",null,{constructor:function(){this._hash={},this.length=0},add:function(h){if(this._hash[h.id])throw new Error("Tried to register widget with id=="+h.id+" but that id is already registered");this._hash[h.id]=h,this.length++},remove:function(h){this._hash[h]&&(delete this._hash[h],this.length--)},forEach:function(h,t){t=t||r.global;var i,s=0;for(i in this._hash)h.call(t,this._hash[i],s++,this._hash);return this},filter:function(h,t){t=t||r.global;var i,a=new s,e=0;for(i in this._hash){var n=this._hash[i];h.call(t,n,e++,this._hash)&&a.add(n)}return a},byId:function(h){return this._hash[h]},byClass:function(h){var t,r,i=new s;for(t in this._hash)(r=this._hash[t]).declaredClass==h&&i.add(r);return i},toArray:function(){var h=[];for(var t in this._hash)h.push(this._hash[t]);return h},map:function(t,r){return h.map(this.toArray(),t,r)},every:function(h,t){t=t||r.global;var i,s=0;for(i in this._hash)if(!h.call(t,this._hash[i],s++,this._hash))return!1;return!0},some:function(h,t){t=t||r.global;var i,s=0;for(i in this._hash)if(h.call(t,this._hash[i],s++,this._hash))return!0;return!1}});return h.forEach(["forEach","filter","byClass","map","every","some"],function(h){i[h]=s.prototype[h]}),s});
//# sourceMappingURL=sourcemaps/WidgetSet.js.map
