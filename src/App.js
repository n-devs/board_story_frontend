import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { PrivateRoute } from '@bsf/routes'
import { Home, Login, Admin, CreateBlog, UpdateBlog, Watch } from '@bsf/pages'
import socketIOClient from 'socket.io-client'

function App() {
  const [auth, setAuth] = React.useState(false)
  const [endpoint] = React.useState("http://localhost:9000")
  const socket = socketIOClient(endpoint)


  React.useEffect(() => {

    // ตรวจสอบการลงชื่อเข้าใช้งาน
    socket.emit('dashboard', sessionStorage.getItem('token'))

    socket.on('dashboard', (data) => {
      setAuth(data.status)
    })
  }, [])

  // เชื่อมต่อ pages
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {auth ? (<Admin status={auth} />) : (<Home status={auth} />)}

        </Route>
        <Route path="/create-blog" >
          {auth ? (<CreateBlog></CreateBlog>) : (<Redirect to="/login"></Redirect>)}

        </Route>

        <Route path="/login">
          {auth ? (<Redirect to="/"></Redirect>) : (<Login />)}
        </Route>

        <Route path={`/blog/watch/:id`}>
          <Watch status={auth}></Watch>
        </Route>
        <Route path={`/blog/update/:id`}>
          {auth ? (<UpdateBlog ></UpdateBlog>) : (<Redirect to="/login"></Redirect>)}

        </Route>

      </Switch>

    </Router>
  );
}

export default App;
