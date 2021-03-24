import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import { init } from "@rematch/core";

// import models from "./models";
import pages from "./pageConfig";

import asyncComponent from "./utils/asyncComponent";

import "./global.less";

const store = init({ models: {} });

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              exact
              component={asyncComponent(
                page.component,
                page.models,
                store.model
              )}
            />
          ))}
        </Switch>
      </HashRouter>
    </Provider>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
