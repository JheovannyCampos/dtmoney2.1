import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 0,
          title: 'Transaction 1',
          amount: 1000,
          type: 'deposit',
          category: 'sneakers',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);