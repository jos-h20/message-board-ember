
import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  sortBy: ['date_added:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
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
    },
    addToFavorites(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
