// ==UserScript==
// @name        autoclick-deposit
// @namespace   https://github.com/originalk
// @description Reicht zurückgewiesene Bilder bei Deopositphotos.com neu ein. Einfach auf die Seite mit den rejects gehen und watch the magic haṕpen, one by one.
// @include     http://*.depositphotos.com/files.html?page=rejected
// @version     0.2
// ==/UserScript==

var linksToOpen = document.querySelectorAll ("td > a.d_blue");

var evt = document.createEvent ("MouseEvents");
evt.initEvent ("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);

//console.log("This is the autoclick script :)");

for (var i = 0; i < linksToOpen.length; ++i) {
	linksToOpen[i].dispatchEvent(evt);
};
