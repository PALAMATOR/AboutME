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
