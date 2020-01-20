/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","./_dijit","dojo/_base/config","dojo/dom-construct","dojo/dom-style","dojo/_base/lang","dojo/on","dojo/sniff"],function(require,e,t,i,o,r,n,s){s.add("config-bgIframe",s("ie")&&!/IEMobile\/10\.0/.test(navigator.userAgent)||s("trident")&&/Windows NT 6.[01]/.test(navigator.userAgent));var a=new function(){var e=[];this.pop=function(){var r;if(e.length)(r=e.pop()).style.display="";else{if(s("ie")<9){var n="<iframe src='"+(t.dojoBlankHtmlUrl||require.toUrl("dojo/resources/blank.html")||'javascript:""')+"' role='presentation' style='position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity=\"0\");'>";r=document.createElement(n)}else(r=i.create("iframe")).src='javascript:""',r.className="dijitBackgroundIframe",r.setAttribute("role","presentation"),o.set(r,"opacity",.1);r.tabIndex=-1}return r},this.push=function(t){t.style.display="none",e.push(t)}};return e.BackgroundIframe=function(e){if(!e.id)throw new Error("no id");if(s("config-bgIframe")){var t=this.iframe=a.pop();e.appendChild(t),s("ie")<7||s("quirks")?(this.resize(e),this._conn=n(e,"resize",r.hitch(this,"resize",e))):o.set(t,{width:"100%",height:"100%"})}},r.extend(e.BackgroundIframe,{resize:function(e){this.iframe&&o.set(this.iframe,{width:e.offsetWidth+"px",height:e.offsetHeight+"px"})},destroy:function(){this._conn&&(this._conn.remove(),this._conn=null),this.iframe&&(this.iframe.parentNode.removeChild(this.iframe),a.push(this.iframe),delete this.iframe)}}),e.BackgroundIframe});
//# sourceMappingURL=sourcemaps/BackgroundIframe.js.map
