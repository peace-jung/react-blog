import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "Components/Layout";
import Main from "Components/Main";
import About from "Components/About";
import Post from "Components/Post";

const AppPresenter = () => {
  const page404 = () => <div>404</div>;

  return (
    <BrowserRouter>
      <Layout>
        <div id="main">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/post" component={Post} />
            <Route path="*" component={page404} />
          </Switch>
        </div>
      </Layout>
    </BrowserRouter>
  );
};

export default AppPresenter;
