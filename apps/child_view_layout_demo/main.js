// ==========================================================================
// Project:   ChildViewLayoutDemo
// Copyright: @2013 7x7 Software, Inc.
// ==========================================================================
/*globals ChildViewLayoutDemo */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
ChildViewLayoutDemo.main = function main() {

  // Configure the shared demo page.
  CommonAssets.set('sourceURL', 'https://github.com/sproutcore/demos/tree/master/apps/child_view_layout_demo');
  CommonAssets.set('demoContent', 'ChildViewLayoutDemo.demoPage.demoContent');

  // Append the main demo pane.
  CommonAssets.mainPage.get('mainPane').append();

};


function main() { ChildViewLayoutDemo.main(); }
