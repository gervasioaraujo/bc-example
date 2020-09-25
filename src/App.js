import React, { Fragment } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

import { GlobalStyle } from "./styles/global";

// Precisa vir depois da importação do reactotron
import { store, persistor } from './store';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Fragment>
          <GlobalStyle />
          <Router history={history}>
            <Routes />
          </Router>
        </Fragment>
      </PersistGate>
    </Provider>
  );
}

export default App;
