import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Header from './Components/Navigation/Header'
import Footer from './Components/Navigation/Footer'

import './stylesheets/Header.scss'
function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  )
}

export default App
