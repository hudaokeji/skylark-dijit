/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang"],function(t,o,e,i,n){function r(t,o){var i=t.resize?t.resize(o):e.setMarginBox(t.domNode,o);i?n.mixin(t,i):(n.mixin(t,e.getMarginBox(t.domNode)),n.mixin(t,o))}var l={marginBox2contentBox:function(t,o){var n=i.getComputedStyle(t),r=e.getMarginExtents(t,n),l=e.getPadBorderExtents(t,n);return{l:i.toPixelValue(t,n.paddingLeft),t:i.toPixelValue(t,n.paddingTop),w:o.w-(r.w+l.w),h:o.h-(r.h+l.h)}},layoutChildren:function(e,i,l,a,d){i=n.mixin({},i),o.add(e,"dijitLayoutContainer"),l=t.filter(l,function(t){return"center"!=t.region&&"client"!=t.layoutAlign}).concat(t.filter(l,function(t){return"center"==t.region||"client"==t.layoutAlign})),t.forEach(l,function(t){var e=t.domNode,n=t.region||t.layoutAlign;if(!n)throw new Error("No region setting for "+t.id);var l,g=e.style;g.left=i.l+"px",g.top=i.t+"px",g.position="absolute",o.add(e,"dijitAlign"+((l=n).substring(0,1).toUpperCase()+l.substring(1)));var u={};a&&a==t.id&&(u["top"==t.region||"bottom"==t.region?"h":"w"]=d),"leading"==n&&(n=t.isLeftToRight()?"left":"right"),"trailing"==n&&(n=t.isLeftToRight()?"right":"left"),"top"==n||"bottom"==n?(u.w=i.w,r(t,u),i.h-=t.h,"top"==n?i.t+=t.h:g.top=i.t+i.h+"px"):"left"==n||"right"==n?(u.h=i.h,r(t,u),i.w-=t.w,"left"==n?i.l+=t.w:g.left=i.l+i.w+"px"):"client"!=n&&"center"!=n||r(t,i)})}};return n.setObject("dijit.layout.utils",l),l});
//# sourceMappingURL=../sourcemaps/layout/utils.js.map
