import Library from '../collections/Library';

class LibraryAdapter {

  add(book, options){
    Library.create(book, options);
  }

  newBookAdded(callback){
    Library.on('add',  (model,collection) => callback(model, collection));
  }

  bookHasBeenRemoved(callback){
    Library.on('destroy',  (model,collection) => callback(model, collection) );
  }

  refresh(callback){
    Library.on('reset',  callback);
  }

  invalidEntry(callback){
    Library.on('invalid',  (model, errors) => callback(errors));
  }

  populate(){
    Library.fetch({reset: true})
  }

}

export default new LibraryAdapter();
