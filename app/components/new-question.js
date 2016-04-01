
import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,
  actions: {
    newQuestionForm(){
      this.set('newQuestionForm', true);
    },
    saveQuestion(){
      var params = {
        author: this.get('author') ? this.get('author'): "",
        content: this.get('content') ? this.get('content'): "",
        notes: this.get('notes') ? this.get('notes'): ""
      };
      this.set('newQuestionForm', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
