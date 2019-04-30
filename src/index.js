import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from "redux-thunk";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

let unsubscribe = store.subscribe(() =>
  console.log('subscription', store.getState())
);

const render = Component => {
    ReactDOM.render(
      <AppContainer>
      <Provider store={store}>
        <HashRouter>
          <Component />
        </HashRouter>
      </Provider>
    </AppContainer>,
      document.getElementById("root")
    );
  };


  render(App);

  if (module.hot) {
    module.hot.accept("./components/App", () => {
      render(App);
    });
  }

serviceWorker.unregister();
