import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import {Home} from '@bsf/pages'

function PrivateRoute({ children, status, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          status ? (
            children
          ) : (
           <Home status={status}></Home>
          )
        }
      />
    );
  }

  export default PrivateRoute