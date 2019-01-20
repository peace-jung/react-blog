import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "Components/Layout";
import Main from "Components/Main";
import About from "Components/About";

const AppPresenter = () => {
  const page404 = () => <div>404</div>;

  return (
    // <div className="body-container">
    <BrowserRouter>
      <Layout>
        <div id="main">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="*" component={page404} />
          </Switch>
        </div>
      </Layout>
    </BrowserRouter>
  );
};

export default AppPresenter;
