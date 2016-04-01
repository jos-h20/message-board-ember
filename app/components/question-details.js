
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    deleteAnswer(answer) {
        this.sendAction('deleteAnswer', answer);
    },
    edit(question, params) {
      this.sendAction('edit', question, params);
    }
  }
});
