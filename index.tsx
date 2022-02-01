import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import Notes from './Notes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const App = () => {
  return (
    <Provider store={store}>
      <Notes />
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
