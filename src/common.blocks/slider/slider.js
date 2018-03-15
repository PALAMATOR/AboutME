'use strict';

(function(){
  var slider = document.getElementById('slider'),
      slider__box = slider.children[0],
      slider__flag = slider__box.children[0],
      slider__value = document.getElementById('slider__value');

  //set defoult fag value
  slider__flag.style.left = slider__box.clientWidth - slider__flag.clientWidth + 'px';

  slider__value.onmouseover = function(doc){
    var target = doc.target;
    if (target != this){
      if (target.tagName == 'DIV'){
        target.onmousedown = function(doc){
          if (target == slider__value.firstChild) slider__flag.style.left = '0px';
          else if (target == slider__value.lastChild) slider__flag.style.left = slider__box.clientWidth - slider__flag.clientWidth + 'px';
          else slider__flag.style.left = target.getBoundingClientRect().left - slider__box.getBoundingClientRect().left - 6 + 'px'; //(slider__box.left - slider__value.left) = 6px
        }
      }
    }
  }

  slider__box.onmousedown = function(doc){
    var slider__flag_position_end = doc.pageX - slider__box.getBoundingClientRect().left - slider__flag.clientWidth/2;
    if (doc.pageX > slider__box.getBoundingClientRect().right - slider__flag.clientWidth/2) slider__flag_position_end = slider__box.clientWidth - slider__flag.clientWidth;
    if (doc.pageX < slider__box.getBoundingClientRect().left + slider__flag.clientWidth/2) slider__flag_position_end = 0;
    slider__flag.style.left = slider__flag_position_end + 'px';
    document.onmousemove = function(doc){
      var slider__flag_position_end = doc.pageX - slider__box.getBoundingClientRect().left - slider__flag.clientWidth/2;
      if (doc.pageX > slider__box.getBoundingClientRect().right - slider__flag.clientWidth/2) slider__flag_position_end = slider__box.clientWidth - slider__flag.clientWidth;
      if (doc.pageX < slider__box.getBoundingClientRect().left + slider__flag.clientWidth/2) slider__flag_position_end = 0;
      slider__flag.style.left = slider__flag_position_end + 'px'
    }
    slider__flag.ondragstart = function(){
      return false;
    }
    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    }
  }
})();
