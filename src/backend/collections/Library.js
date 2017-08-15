import Backbone from 'backbone';
import Book from '../models/Book';
import {LocalStorage} from 'backbone.localstorage';


const Library = Backbone.Collection.extend({
  localStorage: new LocalStorage('BookStore'),
  model: Book
});

export default new Library();
