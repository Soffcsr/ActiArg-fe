import React from 'react'
import './App.css'
import './component/Carousel/Carousel'
import Home from './views/Home'
import GymProfile from './views/GymProfile/GymProfile'
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Gym3">
            <GymProfile/>
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App
