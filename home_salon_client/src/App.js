import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from 'react-router-dom'
import Header from './Components/Navigation/Header'
import Footer from './Components/Navigation/Footer'
import './stylesheets/Header.scss'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Packages from './Components/pages/Packages'
import Testimonials from './Components/pages/Testimonials'
import Login from './Components/admin-page/sign-in'
import { loadAdmin } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Alert from './Components/layout/Alert'
// Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
// gotta change some of these routes to take a render param instead of component but just a placeholder for the time being
const App = () => {
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);


  // const testimonialList = () => {}
  return (
    <Provider store={store}>
    <Router>
      <Header />
      <Alert />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Route exact path='/Packages' component={Packages}></Route>
        
        <Route exact Path='/Login' component={Login}></Route>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  )
}

export default App
