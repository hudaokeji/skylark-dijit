/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","dojo/window","./popup","./DropDownMenu","dojo/ready"],function(e,t,n,o,i,d,r,s,a,c,u,h,f,m,l,p){return u("dijit-legacy-requires")&&p(0,function(){e(["dijit/MenuItem","dijit/PopupMenuItem","dijit/CheckedMenuItem","dijit/MenuSeparator"])}),n("dijit.Menu",l,{constructor:function(){this._bindings=[]},targetNodeIds:[],selector:"",contextMenuForWindow:!1,leftClickToOpen:!1,refocus:!0,postCreate:function(){this.contextMenuForWindow?this.bindDomNode(this.ownerDocumentBody):t.forEach(this.targetNodeIds,this.bindDomNode,this),this.inherited(arguments)},_iframeContentWindow:function(e){return f.get(this._iframeContentDocument(e))||this._iframeContentDocument(e).__parent__||e.name&&document.frames[e.name]||null},_iframeContentDocument:function(e){return e.contentDocument||e.contentWindow&&e.contentWindow.document||e.name&&document.frames[e.name]&&document.frames[e.name].document||null},bindDomNode:function(e){var t;if("iframe"==(e=o.byId(e,this.ownerDocument)).tagName.toLowerCase()){var n=e,d=this._iframeContentWindow(n);t=h.body(d.document)}else t=e==h.body(this.ownerDocument)?this.ownerDocument.documentElement:e;var r={node:e,iframe:n};i.set(e,"_dijitMenu"+this.id,this._bindings.push(r));var u=a.hitch(this,function(e){var t=this.selector,o=t?function(e){return c.selector(t,e)}:function(e){return e},i=this;return[c(e,o(this.leftClickToOpen?"click":"contextmenu"),function(e){e.stopPropagation(),e.preventDefault(),(new Date).getTime()<this._lastKeyDown+500||i._scheduleOpen(this,n,{x:e.pageX,y:e.pageY},e.target)}),c(e,o("keydown"),function(e){(93==e.keyCode||e.shiftKey&&e.keyCode==s.F10||this.leftClickToOpen&&e.keyCode==s.SPACE)&&(e.stopPropagation(),e.preventDefault(),i._scheduleOpen(this,n,null,e.target),this._lastKeyDown=(new Date).getTime())})]});r.connects=t?u(t):[],n&&(r.onloadHandler=a.hitch(this,function(){var e=this._iframeContentWindow(n),t=h.body(e.document);r.connects=u(t)}),n.addEventListener?n.addEventListener("load",r.onloadHandler,!1):n.attachEvent("onload",r.onloadHandler))},unBindDomNode:function(e){var t;try{t=o.byId(e,this.ownerDocument)}catch(e){return}var n="_dijitMenu"+this.id;if(t&&i.has(t,n)){for(var d,r=i.get(t,n)-1,s=this._bindings[r];d=s.connects.pop();)d.remove();var a=s.iframe;a&&(a.removeEventListener?a.removeEventListener("load",s.onloadHandler,!1):a.detachEvent("onload",s.onloadHandler)),i.remove(t,n),delete this._bindings[r]}},_scheduleOpen:function(e,t,n,o){this._openTimer||(this._openTimer=this.defer(function(){delete this._openTimer,this._openMyself({target:o,delegatedTarget:e,iframe:t,coords:n})},1))},_openMyself:function(e){var t=e.target,n=e.iframe,i=e.coords,s=!i;if(this.currentTarget=e.delegatedTarget,i){if(n){var a=d.position(n,!0),c=this._iframeContentWindow(n),h=d.docScroll(c.document),f=r.getComputedStyle(n),l=r.toPixelValue,p=(u("ie")&&u("quirks")?0:l(n,f.paddingLeft))+(u("ie")&&u("quirks")?l(n,f.borderLeftWidth):0),_=(u("ie")&&u("quirks")?0:l(n,f.paddingTop))+(u("ie")&&u("quirks")?l(n,f.borderTopWidth):0);i.x+=a.x+p-h.x,i.y+=a.y+_-h.y}}else(i=d.position(t,!0)).x+=10,i.y+=10;var g=this,y=this._focusManager.get("prevNode"),v=this._focusManager.get("curNode"),w=!v||o.isDescendant(v,this.domNode)?y:v;function D(){g.refocus&&w&&w.focus(),m.close(g)}m.open({popup:this,x:i.x,y:i.y,onExecute:D,onCancel:D,orient:this.isLeftToRight()?"L":"R"}),this.focus(),s||this.defer(function(){this._cleanUp(!0)}),this._onBlur=function(){this.inherited("_onBlur",arguments),m.close(this)}},destroy:function(){t.forEach(this._bindings,function(e){e&&this.unBindDomNode(e.node)},this),this.inherited(arguments)}})});
//# sourceMappingURL=sourcemaps/Menu.js.map
