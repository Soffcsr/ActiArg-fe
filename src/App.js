import React from 'react'
import{ 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'

import Home from './views/Home'
import Profile from './views/Profile/Profile'
import LoginView from './views/Login'
import RegisterView from './views/Register'
import Error404 from './component/Error404'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/GymProfile/:id" children={<Profile/>}>
          </Route>
          <Route exact path="/login">
            <LoginView/>
          </Route>
          <Route exact path="/register">
            <RegisterView/>
          </Route>
          <Route
            component={Error404}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
