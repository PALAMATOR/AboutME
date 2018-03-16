'use strict';

(function(){
  var checkbox__box = document.getElementById('checkbox'),
      checkbox__box_child_num = checkbox__box.childNodes.length,
      checkbox__item_array = [];
  for (var i = 0; i < checkbox__box_child_num; i++){
    checkbox__item_array[i] = [];
    checkbox__item_array[i][0] = checkbox__box.childNodes[i].childNodes[1].textContent;
    checkbox__item_array[i][1] = i;
  }

  function checkboxSorting(){
    var i = 0;
    while(i < checkbox__box_child_num){
      if (i == 0 || checkbox__item_array[i - 1][0] < checkbox__item_array[i][0]){
        i++;
      } else {
        var tmp = checkbox__item_array[i];
        checkbox__item_array[i] = checkbox__item_array[i - 1];
        checkbox__item_array[i - 1] = tmp;
        i--;
      }
    }
    for (var i = 0; i < checkbox__box_child_num; i++){
      checkbox__box.childNodes[checkbox__item_array[i][1]].style.order = i;
    }
  }

  document.addEventListener('DOMContentLoaded',checkboxSorting, false)
})()
