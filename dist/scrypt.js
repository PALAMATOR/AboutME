(function(){
  var slider = document.getElementById('slider');
  var slider__box = slider.children[0];
  var slider__flag = slider__box.children[0];

  var slider__value = document.getElementById('slider__value');

  var slider__value_items = slider__value.getElementsByTagName('div').length;
  for (var i = 0; i < slider__value_items; i++){
    // Здесь начало реализации шага слайдера по значениям
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
