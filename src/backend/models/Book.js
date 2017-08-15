import Backbone from 'backbone';
import _ from 'underscore';

const Book = Backbone.Model.extend({
  defaults: {
    "name": "",
    "description": ""
  },

  validate: function(attrs, options) {
    let invalid = {};
    
    if (_.isEmpty(attrs.name)) {
      invalid.name = "Please provide a valid book Name";
    }

    if (_.isEmpty(attrs.description)) {
      invalid.description = "Please provide a Description";
    }

    return _.isEmpty(invalid)?null:invalid;
  }

});

export default Book;
