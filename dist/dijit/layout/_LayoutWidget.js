/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/lang","../_Widget","../_Container","../_Contained","../Viewport","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style"],function(t,e,i,s,o,a,n,d,h){return a("dijit.layout._LayoutWidget",[e,i,s],{baseClass:"dijitLayoutContainer",isLayoutContainer:!0,_setTitleAttr:null,buildRendering:function(){this.inherited(arguments),n.add(this.domNode,"dijitContainer")},startup:function(){if(!this._started){this.inherited(arguments);var e=this.getParent&&this.getParent();e&&e.isLayoutContainer||(this.resize(),this.own(o.on("resize",t.hitch(this,"resize"))))}},resize:function(e,i){var s=this.domNode;e&&d.setMarginBox(s,e);var o=i||{};t.mixin(o,e||{}),"h"in o&&"w"in o||(o=t.mixin(d.getMarginBox(s),o));var a=h.getComputedStyle(s),n=d.getMarginExtents(s,a),r=d.getBorderExtents(s,a),l=this._borderBox={w:o.w-(n.w+r.w),h:o.h-(n.h+r.h)},u=d.getPadExtents(s,a);this._contentBox={l:h.toPixelValue(s,a.paddingLeft),t:h.toPixelValue(s,a.paddingTop),w:l.w-u.w,h:l.h-u.h},this.layout()},layout:function(){},_setupChild:function(t){var e=this.baseClass+"-child "+(t.baseClass?this.baseClass+"-"+t.baseClass:"");n.add(t.domNode,e)},addChild:function(t,e){this.inherited(arguments),this._started&&this._setupChild(t)},removeChild:function(t){var e=this.baseClass+"-child"+(t.baseClass?" "+this.baseClass+"-"+t.baseClass:"");n.remove(t.domNode,e),this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/layout/_LayoutWidget.js.map
