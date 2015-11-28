import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 1, title: 'Rock and Roll with Ember' },
      { id: 2, title: 'Ember 101' },
      { id: 3, title: 'Clean Code' }
    ];
  }
});
