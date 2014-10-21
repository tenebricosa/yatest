"use strict"

/*Browsers*/

function altText() {
  var browsers = document.querySelectorAll('div.browser');
  for (var i = 0; i < browsers.length; i++) (function(i) {
    var img = document.createElement('img');
    var classes = browsers[i].getAttribute('class');
    img.src = browsers[i].getAttribute('data-src');
    img.className = classes;
    img.onload = function() {
      browsers[i].parentNode.replaceChild(img, browsers[i]);
    }
  } (i))
};

altText();