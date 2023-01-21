// ==UserScript==
// @name         gelbooru image hover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  will show full image when hovering over thumbnails
// @author       xrez
// @match        https://gelbooru.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(".thumbnail-preview").hover(function () {
        console.log("hovering")    
        
        }, function () {
            console.log("stopped hovering")
        }
    );



    // Your code here...
})();