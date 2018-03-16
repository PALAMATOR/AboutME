'use strict';

(function(){
  var radiobutton__item_other = document.getElementById('radiobutton__item_other'),
      radiobutton__item_box = radiobutton__item_other.parentNode.parentNode,
      radiobutton__input =  document.getElementById('radiobutton__input').parentNode;
  function radiobuttonItemOtherChecked(){
    if (radiobutton__item_other.checked === true)
      radiobutton__input.style.display = 'flex';
    else
      radiobutton__input.style.display = 'none';
  }
  radiobutton__item_box.onclick = radiobuttonItemOtherChecked;
  document.addEventListener('DOMContentLoaded',radiobuttonItemOtherChecked, false);
})()
