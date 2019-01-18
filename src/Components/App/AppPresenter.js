import React from "react";
// import { Route, Switch } from "react-router-dom";
import Layout from "Components/Layout";
import Main from "Components/Main";

const AppPresenter = () => {
  return (
    // <div className="body-container">
    <Layout>
      {/* <Switch>
        <Route />
        </Switch> */}

      <div id="main">
        <Main />
      </div>
    </Layout>
  );
};

export default AppPresenter;
