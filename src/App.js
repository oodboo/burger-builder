import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import Checkout from './containers/Checkout/Checkout';
// import Orders from './containers/Orders/Orders';
// import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/acyncComponent/acyncComponent';


const asyncCheckout = asyncComponent(()=> {
  return import('./containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(()=> {
  return import('./containers/Orders/Orders');
});
const asyncAuth = asyncComponent(()=> {
  return import('./containers/Auth/Auth');
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        {/* <Route path="/auth" component={Auth} /> */}
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" /> {/*this redirect to root if nothingelse is found like 404 ali primitive way*/}
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" /> {/*this redirect to root if nothingelse is found like 404 ali primitive way*/}
        </Switch>
      );
    }


    return (
      <div>
        <Layout>
          {routes}
          {/* <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch> */}
        </Layout>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
