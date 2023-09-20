
import React from 'react'
import ReactDOM from 'react-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import HomePage from '../pages/Home'
import Resume from '../pages/Resume'
import AboutThisSite from '../pages/AboutThisSite'
import AboutMe from '../pages/AboutMe'
import Portfolio from '../pages/Portfolio'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-content">
          <Route exact path="/" component={Header} />
          <Route exact path='/aboutThisSite' component={Navigation} />
          <Route path='/aboutMe' component={Navigation} />
          <Route path='/resume' component={Navigation} />
          <Route path='/portfolio' component={Navigation} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/aboutThisSite' component={AboutThisSite} />
            <Route path="/aboutMe" component={AboutMe} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
          <Route path='/' component={Footer} />

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
