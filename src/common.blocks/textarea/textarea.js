'use strict';

(function(){
  console.log('textarea');
  var textarea_box = document.getElementById('textarea'),
      textarea = textarea_box.firstChild,
      textarea_style = getComputedStyle(textarea);
  textarea.onkeydown = function(){
  }
})()
