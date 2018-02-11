(function(){
  var slider = document.getElementById('slider');
  var slider__box = slider.children[0];
  var slider__flag = slider__box.children[0];

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
    };
    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    }
  };

  slider__flag.onmousedown = function(doc){
    document.onmousemove = function(doc){
      var slider__flag_position_end = doc.pageX - slider__box.getBoundingClientRect().left - slider__flag.clientWidth/2;
      if (doc.pageX > slider__box.getBoundingClientRect().right - slider__flag.clientWidth/2) slider__flag_position_end = slider__box.clientWidth - slider__flag.clientWidth;
      if (doc.pageX < slider__box.getBoundingClientRect().left + slider__flag.clientWidth/2) slider__flag_position_end = 0;
      slider__flag.style.left = slider__flag_position_end + 'px'
    };
    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    }
  }
})();
