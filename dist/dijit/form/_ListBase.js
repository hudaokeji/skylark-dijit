/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/on","dojo/window"],function(e,t,s){return e("dijit.form._ListBase",null,{selected:null,_listConnect:function(e,s){var i=this;return i.own(t(i.containerNode,t.selector(function(e,t,s){return e.parentNode==s},e),function(e){i[s](e,this)}))},selectFirstNode:function(){for(var e=this.containerNode.firstChild;e&&"none"==e.style.display;)e=e.nextSibling;this._setSelectedAttr(e,!0)},selectLastNode:function(){for(var e=this.containerNode.lastChild;e&&"none"==e.style.display;)e=e.previousSibling;this._setSelectedAttr(e,!0)},selectNextNode:function(){var e=this.selected;if(e){for(var t=e.nextSibling;t&&"none"==t.style.display;)t=t.nextSibling;t?this._setSelectedAttr(t,!0):this.selectFirstNode()}else this.selectFirstNode()},selectPreviousNode:function(){var e=this.selected;if(e){for(var t=e.previousSibling;t&&"none"==t.style.display;)t=t.previousSibling;t?this._setSelectedAttr(t,!0):this.selectLastNode()}else this.selectLastNode()},_setSelectedAttr:function(e,t){if(this.selected!=e){var i=this.selected;i&&this.onDeselect(i),e&&(t&&s.scrollIntoView(e),this.onSelect(e)),this._set("selected",e)}else e&&this.onSelect(e)}})});
//# sourceMappingURL=../sourcemaps/form/_ListBase.js.map
