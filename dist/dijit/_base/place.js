/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/lang","dojo/window","../place","../_dijit"],function(e,n,r,a,o){var exports={getViewport:function(){return r.getBox()}};return exports.placeOnScreen=a.at,exports.placeOnScreenAroundElement=function(e,r,o,c){var t;if(n.isArray(o))t=o;else for(var u in t=[],o)t.push({aroundCorner:u,corner:o[u]});return a.around(e,r,t,!0,c)},exports.placeOnScreenAroundNode=exports.placeOnScreenAroundElement,exports.placeOnScreenAroundRectangle=exports.placeOnScreenAroundElement,exports.getPopupAroundAlignment=function(n,r){var a={};return e.forEach(n,function(e){var n=r;switch(e){case"after":a[r?"BR":"BL"]=r?"BL":"BR";break;case"before":a[r?"BL":"BR"]=r?"BR":"BL";break;case"below-alt":n=!n;case"below":a[n?"BL":"BR"]=n?"TL":"TR",a[n?"BR":"BL"]=n?"TR":"TL";break;case"above-alt":n=!n;case"above":default:a[n?"TL":"TR"]=n?"BL":"BR",a[n?"TR":"TL"]=n?"BR":"BL"}}),a},n.mixin(o,exports),o});
//# sourceMappingURL=../sourcemaps/_base/place.js.map
