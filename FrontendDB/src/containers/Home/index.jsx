import React, { Component } from 'react';
import './styles.css';

//Slider 
import Carousel from 'nuka-carousel';

//Card Component
import {CardTemplates} from '../../CardComponent/CardComponent.jsx';

//Images
import grok_logo_white from '../../assets/grok-white-logo.png';

import lipstick from '../../assets/templates/lipstick-template.png'
import gold from '../../assets/templates/gold-template.png';
import marble from '../../assets/templates/marble-template.png';
import pineapple from '../../assets/templates/pineapple-template.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [
        pineapple,
        gold,
        lipstick,
        marble
      ]
    }
  }
  render() {

    return (
        <div className="home-body-container">
          <div className="nav-bar-container">
            <div className="nav-bar">
              <a href="#about" className="nav-items">ABOUT GROK</a>
              <a href="#design" className="nav-items">DESIGN YOUR OWN CARD</a>
              <a href="#contact" className="nav-items">CONTACT</a> 
            </div>
          </div>
          <div className="banner-container">
          <a href="/newcardform" className="get-started">
            <button>GET STARTED</button>
          </a>
          <div className="grok-definition">
            {/* <p className="grok-title">
              GROK
            </p> */}
            <div className="definition-title">
              GROK BUSINESS CARDS 
            </div>
            <div className="definition">
              <p className="words">
                Genuine Connections.            
              </p>
              <p className="words">
              Reduce Waste and Clutter.
              </p>
              <p className="words">
                Organize Your Network.
              </p>
              <p className="words">
                Keep Rapport. 
              </p>
            </div>
          </div>
          {/* <img className="banner" src="" alt="banner"/> */}
        </div>
        <div id="design" className="design-info-container">
          <div className="design">
          <div className="card-examples">
            <CardTemplates
              templates={this.state.templates}
            />
          </div>
          <div className="card-explanation">
            <h3 className="home-design-header">DESIGN YOUR OWN CARD</h3>
            <div className="design-text-container">
              <p className="design-text">
                Choose a template that fits your style and mood.
              </p>
              <p className="design-text">
                Not sure which one you like better? Don't worry!
              </p>
              <p className="design-text">
                You can always change your template if you feel like switching it up!
              </p>           
            </div>
          </div>
          </div>
        </div>
        <div id="about" className="about-info">
          <div className="about-header">
            <h3>
            THE ONLY APP YOU NEED TO GROK SOMEONE!
            </h3>
            <p className="the-grok-app">

            </p>
          </div>
          <a href="/newcardform" className="about-get-started">
            <button>GET STARTED</button>
          </a>
        </div>

        <div id="contact" className="contact-info-container">
          <div className="history-container">
            <div className="about-grok-container">
              <p className="about-grok">
                To Grok is to understand something intuitively, empathize, communicate, establish a rapport. 
              </p>
              <p className="about-grok">
                In the 1960s, American author, Robert Heinlein coined the word "grok" as a Martian word associated with water, life, and to live. 
                The word, "grok", is used to bring together once separate realities - entangled in the same experiences, goals, history, and purpose. 
              </p>
              <p className="about-grok">
                In computer programming culture, to "grok" something, is to boldly claim knowledge and mastery of a technique. 
              </p>
            </div>
          </div>
          <div className="contact-info">
            {/* <h4>
              EMAIL US: 
            </h4>
            <p>
              grok.info@wegrokyou.com
            </p> */}
            <div className="back-to-top">
            <a href="#top" className="footer-items"> TAKE ME BACK TO THE TOP</a>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;