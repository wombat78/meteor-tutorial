import Moment from 'moment';
import { Filter } from 'angular-ecmascript/module-helpers';
 
export default class CalendarFilter extends Filter {
  filter(time) {
    if (!time) return;
 
    return Moment(time).calendar(null, {
      lastDay : '[Yesterday]',
      sameDay : 'LT',
      lastWeek : 'dddd',
      sameElse : 'DD/MM/YY'
    });
  }
}
 
// this is the actual name by which we can use to refer to the filter for
// the data
CalendarFilter.$name = 'calendar';

