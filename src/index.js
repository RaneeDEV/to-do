import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import TodosProvider from './hooks/useTodos';
import { IntlProvider } from 'react-intl'
ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <IntlProvider locale='ru' defaultLocale='en'>
        <App />
      </IntlProvider>
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
