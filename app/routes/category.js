import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    return this.store.query('question', {
      orderBy: 'category',
      equalTo: param.question_category
    });
  }
});
