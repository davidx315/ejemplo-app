
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';

const container = document.getElementById('app');

//ReactDOM.render(___que___, ___Donde___) lo queremos renderizar

ReactDOM.render(<App/>, container);
