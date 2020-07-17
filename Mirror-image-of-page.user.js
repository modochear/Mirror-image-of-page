// ==UserScript==
// @name         镜像网站
// @name:en         Mirror-image-of-page
// @name:zh         镜像网站
// @name:zh-CN      镜像网站
// @namespace    https://github.com/modochear/Mirror-image-of-page/
// @supportURL       https://github.com/modochear/Mirror-image-of-page/
// @home-url        https://greasyfork.org/zh-CN/scripts/407242
// @version      0.1.2
// @description  try to take over the world!
// @description:en  try to take over the world!
// @author       modochear
// @include      /.*/
// @grant        none
// ==/UserScript==

(function() {
    var html = document.getElementsByTagName("html")[0];
    html.setAttribute("style", "-moz-transform:scaleX(-1);-webkit-transform:scaleX(-1);-o-transform:scaleX(-1);transform:scaleX(-1);/*IE*/filter:FlipH;")
})();
