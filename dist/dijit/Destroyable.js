/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/aspect","dojo/_base/declare"],function(e,o,n){return n("dijit.Destroyable",null,{destroy:function(e){this._destroyed=!0},own:function(){var n=["destroyRecursive","destroy","remove"];return e.forEach(arguments,function(t){var r,c=o.before(this,"destroy",function(e){t[r](e)}),f=[];function i(){c.remove(),e.forEach(f,function(e){e.remove()})}t.then?(r="cancel",t.then(i,i)):e.forEach(n,function(e){"function"==typeof t[e]&&(r||(r=e),f.push(o.after(t,e,i,!0)))})},this),arguments}})});
//# sourceMappingURL=sourcemaps/Destroyable.js.map
