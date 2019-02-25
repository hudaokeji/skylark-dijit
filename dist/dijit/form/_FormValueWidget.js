/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/sniff","./_FormWidget","./_FormValueMixin"],function(e,i,t,n){return e("dijit.form._FormValueWidget",[t,n],{_layoutHackIE7:function(){if(7==i("ie"))for(var e=this.domNode,t=e.parentNode,n=e.firstChild||e,o=n.style.filter,r=this;t&&0==t.clientHeight;)!function(){var e=r.connect(t,"onscroll",function(){r.disconnect(e),n.style.filter=(new Date).getMilliseconds(),r.defer(function(){n.style.filter=o})})}(),t=t.parentNode}})});
//# sourceMappingURL=../sourcemaps/form/_FormValueWidget.js.map
