import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('books.book', {
      into: 'application',
      outlet: 'modal'
    });
  },

  actions: {
    close() {
      this.transitionTo('books');
    }
  }
});
