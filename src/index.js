import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";

const render = Component => {
    ReactDOM.render(
      <AppContainer>
          <HashRouter>
            <Component />
          </HashRouter>
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
