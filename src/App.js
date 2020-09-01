import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Nav from './Nav/Nav.js'
import Footer from './Footer/Footer.js'
import LandingPage from './LandingPage/LandingPage.js'
import Projects from './Projects/Projects.js'
import AboutMe from './AboutMe/AboutMe.js'
import Resume from './Resume/Resume.js'
import TechWriting from './TechWriting/TechWriting.js'
import NotFound from './NotFound/NotFound.js'


function App() {
  return (
    <div className="App">
      <section className='routes'>
        <Switch>
          <Route exact path = '/' component = {LandingPage} />
          <Route path='/about' component={AboutMe} />
          <Route path='/projects' component = {Projects} />
          <Route path='/resume' component = {Resume} />
          <Route path='/writing' component = {TechWriting} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
