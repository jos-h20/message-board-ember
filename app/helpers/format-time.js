
import Ember from 'ember';


export function formatTime(params/*, hash*/) {
  var date = params[0];
  return moment(date).format('MMMM Do YYYY');

}

export default Ember.Helper.helper(formatTime);
