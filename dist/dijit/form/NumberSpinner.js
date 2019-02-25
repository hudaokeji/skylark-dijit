/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/keys","./_Spinner","./NumberTextBox"],function(i,e,t,n){return i("dijit.form.NumberSpinner",[t,n.Mixin],{baseClass:"dijitTextBox dijitSpinner dijitNumberTextBox",adjust:function(i,e){var t=this.constraints,n=isNaN(i),a=!isNaN(t.max),s=!isNaN(t.min);n&&0!=e&&(i=e>0?s?t.min:a?t.max:0:a?this.constraints.max:s?t.min:0);var o=i+e;return n||isNaN(o)?i:(a&&o>t.max&&(o=t.max),s&&o<t.min&&(o=t.min),o)},_onKeyDown:function(i){if(!(this.disabled||this.readOnly||i.keyCode!=e.HOME&&i.keyCode!=e.END||i.ctrlKey||i.altKey||i.metaKey||void 0===this.get("value"))){var t=this.constraints[i.keyCode==e.HOME?"min":"max"];"number"==typeof t&&this._setValueAttr(t,!1),i.stopPropagation(),i.preventDefault()}}})});
//# sourceMappingURL=../sourcemaps/form/NumberSpinner.js.map
