import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
// import NotFound from "../../Error/NotFound";
import Home from "../Pages/Home";

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        {/* --------------------------------- Public --------------------------------- */}
        <Route path="/" exact component={Home} />
        {/* <Route path="/" exact component={Home} /> */}
        {/* <RouteWrapper path="/login" component={Login} layout={Layout} /> */}

        {/* <RouteWrapper
          path="/admin"
          exact
          component={Dashboard}
          layout={LayoutWithDrawer}
          // permission="shipping.shipment.list"
        /> */}

        {/* --------------------------------- 404 --------------------------------- */}
        {/* <RouteWrapper component={NotFound} layout={LayoutWithDrawer} /> */}
      </Switch>
    </Fragment>
  );
};

export default Routes;

function RouteWrapper({
  component: Component,
  layout: Layout,
  permission,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout permission={permission} {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  permission: PropTypes.any,
};
