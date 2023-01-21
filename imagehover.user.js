// ==UserScript==
// @name         gelbooru image hover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  will show full image when hovering over thumbnails
// @author       xrez
// @match        https://gelbooru.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/xrez1/uscriptThing/raw/master/imagehover.user.js
// ==/UserScript==

(function() {
    'use strict';

    $(".thumbnail-preview").hover(function () {
        print(this.$("img"))
        }, function () {
        }
    );



    // Your code here...
})();