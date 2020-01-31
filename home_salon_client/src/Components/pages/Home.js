import React from 'react'
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import CheckIcon from '@material-ui/icons/Check';

import './../../stylesheets/Home.scss'

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
           <h1 className="section-intro1__title">
              Welcome to my Home Salon Redcliffe
              </h1>
              <div className="section-intro1__subtitle">
                I offer great services such as;
              </div>
      </div>
    );
  }
}

export default Home
