import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './HOC/Layout';
import Home from './components/home/index';
import RegisterLogin from './components/register_login/index';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>

  )
}

export default Routes;
