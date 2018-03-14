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
