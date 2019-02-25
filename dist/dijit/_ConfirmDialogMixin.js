/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","./_WidgetsInTemplateMixin","dojo/i18n!./nls/common","dojo/text!./templates/actionBar.html","./form/Button"],function(t,n,e,o){return t("dijit/_ConfirmDialogMixin",n,{actionBarTemplate:o,buttonOk:e.buttonOk,_setButtonOkAttr:{node:"okButton",attribute:"label"},buttonCancel:e.buttonCancel,_setButtonCancelAttr:{node:"cancelButton",attribute:"label"}})});
//# sourceMappingURL=sourcemaps/_ConfirmDialogMixin.js.map
