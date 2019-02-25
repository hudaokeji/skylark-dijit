/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/dom-geometry","dojo/dom-style","dojo/_base/kernel","dojo/_base/window","./Viewport","./main"],function(e,t,r,a,o,n,i){function h(a,i,h,s){var d=n.getEffectiveBox(a.ownerDocument);a.parentNode&&"body"==String(a.parentNode.tagName).toLowerCase()||o.body(a.ownerDocument).appendChild(a);var l=null;e.some(i,function(e){var r=e.corner,o=e.pos,n=0,i={w:{L:d.l+d.w-o.x,R:o.x-d.l,M:d.w}[r.charAt(1)],h:{T:d.t+d.h-o.y,B:o.y-d.t,M:d.h}[r.charAt(0)]},c=a.style;if(c.left=c.right="auto",h){var y=h(a,e.aroundCorner,r,i,s);n=void 0===y?0:y}var p=a.style,u=p.display,b=p.visibility;"none"==p.display&&(p.visibility="hidden",p.display="");var w=t.position(a);p.display=u,p.visibility=b;var f={L:o.x,R:o.x-w.w,M:Math.max(d.l,Math.min(d.l+d.w,o.x+(w.w>>1))-w.w)}[r.charAt(1)],v={T:o.y,B:o.y-w.h,M:Math.max(d.t,Math.min(d.t+d.h,o.y+(w.h>>1))-w.h)}[r.charAt(0)],x=Math.max(d.l,f),m=Math.max(d.t,v),M=Math.min(d.l+d.w,f+w.w)-x,B=Math.min(d.t+d.h,v+w.h)-m;return n+=w.w-M+(w.h-B),(null==l||n<l.overflow)&&(l={corner:r,aroundCorner:e.aroundCorner,x:x,y:m,w:M,h:B,overflow:n,spaceAvailable:i}),!n}),l.overflow&&h&&h(a,l.aroundCorner,l.corner,l.spaceAvailable,s);var c=l.y,y=l.x,p=o.body(a.ownerDocument);/relative|absolute/.test(r.get(p,"position"))&&(c-=r.get(p,"marginTop"),y-=r.get(p,"marginLeft"));var u=a.style;return u.top=c+"px",u.left=y+"px",u.right="auto",l}var s={TL:"BR",TR:"BL",BL:"TR",BR:"TL"},d={at:function(t,r,a,o,n){return h(t,e.map(a,function(e){var t={corner:e,aroundCorner:s[e],pos:{x:r.x,y:r.y}};return o&&(t.pos.x+="L"==e.charAt(1)?o.x:-o.x,t.pos.y+="T"==e.charAt(0)?o.y:-o.y),t}),n)},around:function(o,n,i,s,d){var l;if("string"==typeof n||"offsetWidth"in n||"ownerSVGElement"in n){if(l=t.position(n,!0),/^(above|below)/.test(i[0])){var c=t.getBorderExtents(n),y=n.firstChild?t.getBorderExtents(n.firstChild):{t:0,l:0,b:0,r:0},p=t.getBorderExtents(o),u=o.firstChild?t.getBorderExtents(o.firstChild):{t:0,l:0,b:0,r:0};l.y+=Math.min(c.t+y.t,p.t+u.t),l.h-=Math.min(c.t+y.t,p.t+u.t)+Math.min(c.b+y.b,p.b+u.b)}}else l=n;if(n.parentNode)for(var b="absolute"==r.getComputedStyle(n).position,w=n.parentNode;w&&1==w.nodeType&&"BODY"!=w.nodeName;){var f=t.position(w,!0),v=r.getComputedStyle(w);if(/relative|absolute/.test(v.position)&&(b=!1),!b&&/hidden|auto|scroll/.test(v.overflow)){var x=Math.min(l.y+l.h,f.y+f.h),m=Math.min(l.x+l.w,f.x+f.w);l.x=Math.max(l.x,f.x),l.y=Math.max(l.y,f.y),l.h=x-l.y,l.w=m-l.x}"absolute"==v.position&&(b=!0),w=w.parentNode}var M=l.x,B=l.y,L="w"in l?l.w:l.w=l.width,T="h"in l?l.h:(a.deprecated("place.around: dijit/place.__Rectangle: { x:"+M+", y:"+B+", height:"+l.height+", width:"+L+" } has been deprecated.  Please use { x:"+M+", y:"+B+", h:"+l.height+", w:"+L+" }","","2.0"),l.h=l.height),g=[];function R(e,t){g.push({aroundCorner:e,corner:t,pos:{x:{L:M,R:M+L,M:M+(L>>1)}[e.charAt(1)],y:{T:B,B:B+T,M:B+(T>>1)}[e.charAt(0)]}})}e.forEach(i,function(e){var t=s;switch(e){case"above-centered":R("TM","BM");break;case"below-centered":R("BM","TM");break;case"after-centered":t=!t;case"before-centered":R(t?"ML":"MR",t?"MR":"ML");break;case"after":t=!t;case"before":R(t?"TL":"TR",t?"TR":"TL"),R(t?"BL":"BR",t?"BR":"BL");break;case"below-alt":t=!t;case"below":R(t?"BL":"BR",t?"TL":"TR"),R(t?"BR":"BL",t?"TR":"TL");break;case"above-alt":t=!t;case"above":R(t?"TL":"TR",t?"BL":"BR"),R(t?"TR":"TL",t?"BR":"BL");break;default:R(e.aroundCorner,e.corner)}});var C=h(o,g,d,{w:L,h:T});return C.aroundNodePos=l,C}};return i.place=d});
//# sourceMappingURL=sourcemaps/place.js.map
