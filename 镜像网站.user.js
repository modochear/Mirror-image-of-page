// ==UserScript==
// @name         镜像网站
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       modochear
// @include      /.*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var html = document.getElementsByTagName("html")[0];
    html.setAttribute("style", "-moz-transform:scaleX(-1);-webkit-transform:scaleX(-1);-o-transform:scaleX(-1);transform:scaleX(-1);/*IE*/filter:FlipH;")
})();