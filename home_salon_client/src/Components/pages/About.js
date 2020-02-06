import React, { Component } from "react";

import { Card, CardContent, Grid } from "@material-ui/core";
import '../../stylesheets/About.scss'


class About extends Component {
  state = {};

  aboutList = [
    {
    
      comment: `I am 37 and I'm highly qualified in all aspects of hairdressing with 20 plus years experience. I originally trained in a very prestigious salon in London where I had the privilege to qualify with the very best skills in all colouring and cutting techniques. I have worked in Rome, Milan, Ireland, London and now Australia. I would love the opportunity to get to know you and give you the very best quality of hairdressing at the best prices in Redcliffe. `,
      user: {
        imageUrl: "./assets/images/face-1.jpg"
      }
    },
    {
      comment: `Your needs are of the utmost importance to me and I am committed to meeting those needs at an extremely low price, see Rates & Deals page for cost of all my services.
      As a result of this dedication to you, a high percentage of my business is from repeat customers and referrals. 
      
      I would welcome the opportunity to earn your trust and deliver you the best service in the industry.`,
      user: {
        imageUrl: "./assets/images/face-1.jpg"
      }
    },
    {
      comment: `The salon you will be coming to is very relaxed and comfortable where you can unwind, sit back and let me take care of the rest. I am open from 5:45am Wednesday, Thursday and Friday so if you'd like to get your hair coloured and cut before work I am sure I can provide a time that suits you.  
      I use the best quality products in the salon and if you have any specific needs regarding products please let me know and I will endeavour to meet those needs. `,
      user: {
        imageUrl: "./assets/images/face-1.jpg"
      }
    },

  ];

  render() {
    return (
      <div className="landing">
      <div className="section section-testimonial1" id="testimonial2">
        <div className="container">
          <div className="section__header">
          <div className="text-center">
            <div className="section-intro1__subtitle mb-24 text-secondary">
            <h2>About Me</h2>
            </div>
          </div>
          </div>

          <Grid container spacing={4}>
            {this.aboutList.map((about, index) => (
              <Grid item md={4} sm={4} key={index}>
                <Card className="h-100 px-24 card">
                  <CardContent className="testimonial1__card-content">
                  <div className="pb-16">
                  
                      <p className="m-0">{about.comment}</p>
                    </div>

                    <div className="card__user">
                      <img
                        className="p-0 m-0"
                        src={about.user.imageUrl}
                        alt="icon"
                      />
                  
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      </div>
    );
  }
}

export default About;