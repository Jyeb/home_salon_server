import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import CheckIcon from '@material-ui/icons/Check';
import './../../stylesheets/Home.scss'

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
      <section className="section section-intro1 section-intro3" id="intro3">
        <div className="container">
          <Grid container justify="center">
            <Grid item md={6}>
              <h1 className="section-intro1__title">
              Welcome to my Home Salon Redcliffe
              </h1>
              <div className="section-intro1__subtitle">
                I offer great services such as;
              </div>

              <div className="section-intro1__list">
                <div className="section-intro1__list__item text-muted">
                < CheckIcon /> Balayage
                </div>
                <div className="section-intro1__list__item text-muted">
                < CheckIcon /> Ombre
                </div>
                <div className="section-intro1__list__item text-muted">
                < CheckIcon /> Foils
                </div>
              </div>
              <Fab
                  variant="extended"
                  size="large"
                  aria-label="Buy"
                  className="btn-action m-8"
                >See More?
                </Fab>
            </Grid>
            <Grid item md={6}>
              <div className="intro3__product">
                <img className="yay"
                  src="https://i.imgur.com/6haFEAO.png"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      </div>
    );
  }
}


export default Home
