/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","./main","dojo/_base/config","dojo/dom-construct","dojo/dom-style","dojo/_base/lang","dojo/on","dojo/sniff"],function(e,t,i,o,r,n,s,a){a.add("config-bgIframe",a("ie")&&!/IEMobile\/10\.0/.test(navigator.userAgent)||a("trident")&&/Windows NT 6.[01]/.test(navigator.userAgent));var f=new function(){var t=[];this.pop=function(){var n;if(t.length)(n=t.pop()).style.display="";else{if(a("ie")<9){var s="<iframe src='"+(i.dojoBlankHtmlUrl||e.toUrl("dojo/resources/blank.html")||'javascript:""')+"' role='presentation' style='position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity=\"0\");'>";n=document.createElement(s)}else(n=o.create("iframe")).src='javascript:""',n.className="dijitBackgroundIframe",n.setAttribute("role","presentation"),r.set(n,"opacity",.1);n.tabIndex=-1}return n},this.push=function(e){e.style.display="none",t.push(e)}};return t.BackgroundIframe=function(e){if(!e.id)throw new Error("no id");if(a("config-bgIframe")){var t=this.iframe=f.pop();e.appendChild(t),a("ie")<7||a("quirks")?(this.resize(e),this._conn=s(e,"resize",n.hitch(this,"resize",e))):r.set(t,{width:"100%",height:"100%"})}},n.extend(t.BackgroundIframe,{resize:function(e){this.iframe&&r.set(this.iframe,{width:e.offsetWidth+"px",height:e.offsetHeight+"px"})},destroy:function(){this._conn&&(this._conn.remove(),this._conn=null),this.iframe&&(this.iframe.parentNode.removeChild(this.iframe),f.push(this.iframe),delete this.iframe)}}),t.BackgroundIframe});
//# sourceMappingURL=sourcemaps/BackgroundIframe.js.map
