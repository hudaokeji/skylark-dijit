/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
!function(r,e){var n=e.define,o=e.require,t="function"==typeof n&&n.amd,i=!t&&"undefined"!=typeof exports;if(!t&&!n){var u={};n=e.define=function(r,e,n){"function"==typeof n?(u[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),o=r.split("/");n.pop();for(var t=0;t<o.length;t++)"."!=o[t]&&(".."==o[t]?n.pop():n.push(o[t]));return n.join("/")}(e,r)}),resolved:!1,exports:null},o(r)):u[r]={factory:null,resolved:!0,exports:n}},o=e.require=function(r){if(!u.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var n=u[r];if(!n.resolved){var t=[];n.deps.forEach(function(r){t.push(o(r))}),n.exports=n.factory.apply(e,t)||null,n.resolved=!0}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,e){r("dijit/main",["dojo/_base/kernel"],function(r){return r.dijit}),r("dijit",["dijit/main"],function(r){return r})}(n),!t){var f=o("skylark-langx/skylark");i?module.exports=f:e.skylarkjs=f}}(0,this);
//# sourceMappingURL=sourcemaps/dijit.js.map
