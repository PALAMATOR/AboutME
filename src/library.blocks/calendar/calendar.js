'use stric';

(function(){
  let q = new WidgetCalendar({
        widgetClass: 'DATEPICKER',
        widgetParentId: 'calendar__input',
        widgetEvent: [
          'onclick'
        ]
      });
})()

function WidgetCalendar(options){
  /* using
  *  js.js : jsObjectMergeProperty()
  *  html.js : htmlStringToHTMLElement()
  */
  const options_default = {
          widgetClassName: '',
          widgetParentId: 'calendar__input'
        }
}
