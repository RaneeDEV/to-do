import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import TodosProvider from './hooks/useTodos';
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <IntlProvider locale='ru' defaultLocale='en'>
          <App />
        </IntlProvider>
      </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
