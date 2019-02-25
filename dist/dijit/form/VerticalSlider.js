/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","./HorizontalSlider","dojo/text!./templates/VerticalSlider.html"],function(e,i,t){return e("dijit.form.VerticalSlider",i,{templateString:t,_mousePixelCoord:"pageY",_pixelCount:"h",_startingPixelCoord:"y",_handleOffsetCoord:"top",_progressPixelSize:"height",_descending:!0,_isReversed:function(){return this._descending}})});
//# sourceMappingURL=../sourcemaps/form/VerticalSlider.js.map
