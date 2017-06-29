import Ember from 'ember';

export default Ember.Component.extend({
  availableTags: ['AAAA', 'BBBBB', 'CCCCC', 'DDDD', '124'],
  selectedTags: [],
  showFiller: false,

  buttonLabel: Ember.computed('showFiller', function() {
    return this.get('showFiller') ? 'Remove Filler' : 'Add Filler'
  }),

  actions: {
    addTag(tag) {
      this.get('selectedTags').pushObject(tag)
    },
    removeTag(tag) {
      this.get('selectedTags').removeObject(tag)
    },
    toggleFiller() {
      this.set('showFiller', !this.get('showFiller'))
    }
  }
});
