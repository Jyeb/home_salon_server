import React, { Component } from "react";
import { Grid, Card, Icon } from "@material-ui/core";
import '../../stylesheets/Contact.scss'


class Contact extends Component {
  state = {};
  cardList = [
    {
      title: "Opening Hours",
      text:
        "Wednesday to Friday 5:45 am - 1:30 pm"
    },
    {
      title: "Phone Number",
      text:
        "0404579007"
    }
  ];
  render() {
    return (
      <div className="landing">
      <div className="section section-service4" id="service4">
        <div className="container">
          <div className="section__header">
            <h2>Contact</h2>
          </div>
          <div className="text-center">
            <Grid container spacing={4}>
              {this.cardList.map((card, index) => (
                <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                  <Card className="service4__card card">
                    <Icon className="service4__card__icon"></Icon>
                    <div className="service4__card__description">
                      <h3>{card.title}</h3>
                      <p className="m-0">{card.text}</p>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Contact;
