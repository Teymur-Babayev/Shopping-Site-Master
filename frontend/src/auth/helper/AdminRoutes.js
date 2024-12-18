import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAutheticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAutheticated() && isAutheticated().user.role === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
