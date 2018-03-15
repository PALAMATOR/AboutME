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
