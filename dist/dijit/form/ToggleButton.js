/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/kernel","./Button","./_ToggleButtonMixin"],function(e,t,d,o){return e("dijit.form.ToggleButton",[d,o],{baseClass:"dijitToggleButton",setChecked:function(e){t.deprecated("setChecked("+e+") is deprecated. Use set('checked',"+e+") instead.","","2.0"),this.set("checked",e)}})});
//# sourceMappingURL=../sourcemaps/form/ToggleButton.js.map
