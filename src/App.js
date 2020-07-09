import React from 'react'
import './App.css'
import './component/Carousel/Carousel'
import Home from './views/Home'
import Profile1 from './views/Profile/Profile1'
import ProfileX from './views/Profile/ProfileX'
import Login from './views/Login'
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/profile1">
            <Profile1/>
          </Route>
          <Route path="/profilex">
            <ProfileX/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
