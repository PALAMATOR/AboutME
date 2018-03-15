'use strict';

(function(){
  var textarea_box = document.getElementById('textarea'),
      textarea = textarea_box.firstChild,
      textarea_style_lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10),
      textarea_counter = textarea.scrollHeight;

  function textareaUpDateHeight(){
    if (textarea_counter < textarea.scrollHeight || textarea.clientHeight < textarea.scrollHeight){
      textarea.style.height = textarea.scrollHeight + 'px';
      textarea_counter += textarea_style_lineHeight;
      textareaAddNewBackgroundLine(textarea_counter);
    }
    console.log(textarea);
  }

  function textareaAddNewBackgroundLine(value){
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
  textarea.oninput = textareaUpDateHeight;
  document.addEventListener('DOMContentLoaded',textareaUpDateHeight, false)
})()
