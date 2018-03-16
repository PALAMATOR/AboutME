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

'use strict';

(function(){
  var textarea_box = document.getElementById('textarea'),
      textarea = textarea_box.firstChild,
      textarea_style_lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10);

  function textareaStarHeight(){
    var num_lines = 0;
    if (textarea.clientHeight < textarea.scrollHeight){
      textarea.style.height = textarea.scrollHeight + 'px';
      num_lines = textarea.scrollHeight / textarea_style_lineHeight;
      for (var i = 0; i < Math.ceil(num_lines) - 1; i++){
        textareaAddNewBackgroundLine();
      }
    }
  }

  function textareaNewHeight(){
    var num_lines = 0;
    if (textarea.clientHeight < textarea.scrollHeight){
      textarea.style.height = textarea.scrollHeight + 'px';
      textareaAddNewBackgroundLine();
    }
  }

  function textareaAddNewBackgroundLine(){
    var textarea_style_background = htmlStyleGetComputedBackground(textarea, ['backgroundImage',
                                                                              'backgroundOrigin',
                                                                              'backgroundPositionX',
                                                                              'backgroundPositionY',
                                                                              'backgroundRepeat',
                                                                              'backgroundSize' ]),
        textarea_style_backgroundPositionY_last_value = parseInt(htmlStyleGetLastPropertyValue(textarea_style_background.backgroundPositionY), 10) + textarea_style_lineHeight;
    for (var property in textarea_style_background){
      if (property == 'backgroundPositionY'){
        textarea_style_background[property] += ', ' + textarea_style_backgroundPositionY_last_value + 'px';
      } else {
        textarea_style_background[property] += ', ' + htmlStyleGetLastPropertyValue(textarea_style_background[property]);
      }
      textarea.style[property] = textarea_style_background[property];
    }
  }
  textarea.oninput = textareaNewHeight;
  document.addEventListener('DOMContentLoaded',textareaStarHeight, false)
})()

'use strict'

function htmlStyleGetLastPropertyValue(list_property){
  var array_property = list_property.split(', ');
  return  array_property[array_property.length - 1];
}

function htmlStyleGetComputedBackground(element, background_property){
  var element_styles = {},
      element_background = {},
      defaultproperty = [ 'backgroundAttachment',
                              'backgroundBlendMode',
                              'backgroundClip',
                              'backgroundColor',
                              'backgroundImage',
                              'backgroundOrigin',
                              'backgroundPositionX',
                              'backgroundPositionY',
                              'backgroundRepeat',
                              'backgroundSize' ],
      element_background_property = background_property === undefined ||  background_property == [] ? background_property : background_property;

  if (typeof(element) === 'object' && element instanceof HTMLElement){
    element_styles = getComputedStyle(element);
    element_background = jsObjectCopySelectedProperty(element_styles, element_background_property);
  } else {
    console.error('htmlStyleGetComputedBackground: argument is not a HTMLElement');
    return undefined;
  }
  return element_background;
}

'use strict'

function jsObjectCopySelectedProperty(){
  /*copyObjectProperty(arg1, arg2, ... , argN)
    where function returning is properties from argN in arg1 + arg2 + .. + argN;
  */
  var output_object = {},
      input_object = {},
      property_list = arguments[arguments.length - 1];
  if (property_list == []){
    console.error('jsObjectCopySelectedProperty: property list is empty');
    return undefined;
  }
  for (var i = 0; i < arguments.length - 1; i++){
    if (typeof(arguments[i]) === 'object'){
      input_object = jsObjectMergeProperty(arguments[i]);
      for (var property in property_list){
        if (input_object.hasOwnProperty(property_list[property])){
          output_object[property_list[property]] = input_object[property_list[property]];
        }
      }
    } else {
      console.error('jsObjectCopySelectedProperty: ' + i + ' argument is not object');
      return undefined;
    }
  }
  return output_object;
}

function jsObjectMergeProperty(){
  /*copyObjectProperty(arg1, arg2, ... , argN)
    where function returning is expanding by arg1 + arg2 + .. + argN;
  */
  var output_object = {};
  for (var i = 0; i < arguments.length; i++){
    if (typeof(arguments[i]) === 'object'){
      for (var property in arguments[i]){
        output_object[property] = arguments[i][property];
      }
    } else {
      console.error('jsObjectMergeProperty: ' + i + ' argument is not object');
      return undefined;
    }
  }
  return output_object;
}
