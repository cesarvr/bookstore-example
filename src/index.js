import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormView from './views/Form';
import List from './views/components/List';
import registerServiceWorker from './registerServiceWorker';
import BookStore from './backend/adapter/LibraryAdapter';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<FormView dataSource={BookStore}/>, document.getElementById('form'));
ReactDOM.render(<List dataSource={BookStore}/>, document.getElementById('list'));

BookStore.populate();
registerServiceWorker();
