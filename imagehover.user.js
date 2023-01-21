// ==UserScript==
// @name         gelbooru image hover
// @namespace    https://github.com/xrez1
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

    //https://gelbooru.com/thumbnails/9b/d8/thumbnail_9bd85f018ace5382aba1e5b63643a8aa.jpg
    //https://img3.gelbooru.com//images/9b/d8/9bd85f018ace5382aba1e5b63643a8aa.jpeg

    function getFullImg(src){
        var x = src
        var y = x.replace("thumbnails", "/images");
        var z = y.replace("thumbnail_", "");
        var q = z.replace("gelbooru.com","img3.gelbooru.com");
        return q;
    }

    $(".thumbnail-preview").hover(function () {
        const obj =  $(this).find("img");
        var thumbLink = Object.values(obj)[0].src;
        console.log(getFullImg(thumbLink));

        }, function () {
        }
    );
})();