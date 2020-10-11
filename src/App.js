import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";

import LoginPage from "./App/containers/LoginPage";

function App() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default connect()(App);
