(function(){
  var slider = document.getElementById('slider');
  var slider__box = slider.children[0];
  var slider__flag = slider__box.children[0];

  slider__flag.onmousedown = function(doc){
    var slider__flag_coords_start = getCoords(slider__flag);
    var slider__flag_position_shift = doc.pageX - slider__flag_coords_start.left;
    var slider__box_coords = getCoords(slider__box);

    document.onmousemove = function(doc){
      var slider__flag_position_end = doc.pageX - slider__flag_position_shift - slider__box_coords.left;
      var slider__box_rightEdge = slider__box.offsetWidth - slider__flag.offsetWidth;

      if (slider__flag_position_end < 0) slider__flag_position_end = 0;
      if (slider__flag_position_end > slider__box_rightEdge) slider__flag_position_end = slider__box_rightEdge;

      slider__flag.style.left = slider__flag_position_end + 'px';
    }
    slider__flag.style.background = "green";

    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };

    return false;
  };

  function getCoords(element){
    var coords = element.getBoundingClientRect();
    return {
      left: coords.left + pageXOffset
    }
  }
})();
