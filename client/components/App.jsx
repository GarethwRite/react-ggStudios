import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'




import Home from './Home'
import About from './About'
import News from './News'
import MenuBar from './MenuBar'
import Forum from './Forum'
import Store from './Store'
import Games from './Games'
import MobileApps from './MobileApps'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Router>
        <MenuBar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/news' component={News} />
        <Route path='/games' component={Games} />
        <Route path='/mobileApps' component={MobileApps} />
        <Route path='/forum' component={Forum} />
        <Route path='/store' component={Store} />
        <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
