import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { PrivateRoute } from '@bsf/routes'
import { Home, Login, Admin } from '@bsf/pages'
import socketIOClient from 'socket.io-client'

function App() {
  const [auth, setAuth] = React.useState(false)
  const [endpoint] = React.useState("http://localhost:9000")
  const socket = socketIOClient(endpoint)



  React.useEffect(() => {
    socket.emit('dashboard', sessionStorage.getItem('token'))

    socket.on('dashboard', (data) => {
      setAuth(data.status)
    })
  })

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
        {auth ? (<Admin status={auth} />) : (<Home status={auth} />)}

        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path={`/${"id"}`} status={auth}>
          {/* <Admin status={auth} /> */}
           {auth ? (<Admin status={auth} />) : (<Home status={auth} />)}
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
