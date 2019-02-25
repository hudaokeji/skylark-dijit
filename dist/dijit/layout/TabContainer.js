/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","./_TabContainerBase","./TabController","./ScrollingTabController"],function(t,i,e,o,s){return i("dijit.layout.TabContainer",e,{useMenu:!0,useSlider:!0,controllerWidget:"",_makeController:function(i){var e=this.baseClass+"-tabs"+(this.doLayout?"":" dijitTabNoLayout");return new("string"==typeof this.controllerWidget?t.getObject(this.controllerWidget):this.controllerWidget)({id:this.id+"_tablist",ownerDocument:this.ownerDocument,dir:this.dir,lang:this.lang,textDir:this.textDir,tabPosition:this.tabPosition,doLayout:this.doLayout,containerId:this.id,class:e,nested:this.nested,useMenu:this.useMenu,useSlider:this.useSlider,tabStripClass:this.tabStrip?this.baseClass+(this.tabStrip?"":"No")+"Strip":null},i)},postMixInProperties:function(){this.inherited(arguments),this.controllerWidget||(this.controllerWidget="top"!=this.tabPosition&&"bottom"!=this.tabPosition||this.nested?o:s)}})});
//# sourceMappingURL=../sourcemaps/layout/TabContainer.js.map
