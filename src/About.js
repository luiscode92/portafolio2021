import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import profile from "./img/luis1.jpg";
import resume from "./Luis-Sanjuan-CV.pdf";
import link from "./img/link-icon.svg"

class About extends Component {
  state = {
    hamburgerState: "off",
    link: link
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger");
    let overlay = document.querySelector(".overlay");
    if (this.state.hamburgerState === "off") {
      hamburger.classList.add("is-active");
      overlay.classList.remove("hide");
      overlay.classList.add("show");
      this.setState({hamburgerState: "on"})
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({hamburgerState: "off"})
    }
  }

  render() {
    return (
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="anne"><Link to="/" className="active">Luis Enrique Sanjuan Melo</Link></div>
            <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="submenus">
                <div className="work-mobile"><Link to="/">Work</Link></div>
                <div className="articles-mobile"><Link to="/articles">Articles</Link></div>
                <div className="about-mobile"><Link to="/about" className="active">About</Link></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work"><Link to="/">Work</Link></div>
              <div className="articles"><Link to="/articles">Articles</Link></div>
              <div className="about"><Link to="/about" className="active">About</Link></div>
            </div>
          </div>
          <div className="designer">
            
          </div>
          <div className="speciality">
            Full-stack Software Development
          </div>
        </section>
        <section className="about">
          <img src={profile} alt="Profile" className="about-image"/>
            {window.innerWidth<=1009 ?
              <div className="about-content">
                <div>
                  Hi, my name is Luis Sanjuan.<br/><br/>
                  I am a Full-stack Engineer passionate about creating tech products, with great design. In the past I have worked for Skillshare, a NY based Ed-tech company for creative people, Lounge HQ a L.A based startup that provides a virutal office space and Sotvation a company that develops technologies for smarth cities. Here are a few things that describe me.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                  <span className="about-title">Experience Designing own products</span><br/><br/>
                  I have successfully shipped 2 digital product from scratch up to date. Through this experience, I have gained expertise in early stage conceptualization, designing applications from end-to-end, and gradually scaling design. These projects cover a variety of platforms, including the web and mobile. Also provided design insights to a seed  capital startup<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                  <span className="about-title">Experience at startups </span><br/><br/>
                  Most of my recent work has been focused around startups and tools for creative people. Previously I helped shipped Lounge a virtual hq app, before that I worked for Skillshare, a online learning community for creatives. In the past I have worked on smarth cities multiplatform apps. Through this process, I have gained a good understanding of what it's like to work with intricate systems and technical constraints.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                <span className="about-title">Education and Skills</span><br/><br/>
                I finished the Holberton School Fullstack Software Engineer program, with strong knowledge in Algorithms, C and Python. I am proficent in Javascript, NodeJs, Reactjs, Material-UI, Sass, Stylus, Flask among others in fact, I designed and <a href="https://github.com/hermy0211/portfolio" target="_blank" rel="noopener noreferrer">coded<img className="link-icon" src={this.state.link} alt="Link Icon"/></a> this portfolio myself! My experiecen working with startups gave me a strong sense of design and user experience.<br/><br/><br/>
                Feel free to contact me for any inquiries about my portfolio and work opportunities!
                </div>
              </div> :

              <div className="about-content">
                  <div>
                  Hi, my name is Luis Sanjuan.<br/><br/>
                  I am a Full-stack Engineer passionate about creating tech products, with great design. In the past I have worked for Skillshare, a NY based Ed-tech company for creative people, Lounge HQ a L.A based startup that provides a virutal office space and Sotvation a company that develops technologies for smarth cities. Here are a few things that describe me.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                  <span className="about-title">Experience Designing own products</span><br/><br/>
                  I have successfully shipped 2 digital product from scratch up to date. Through this experience, I have gained expertise in early stage conceptualization, designing applications from end-to-end, and gradually scaling design. These projects cover a variety of platforms, including the web and mobile. Also provided design insights to a seed  capital startup<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                  <span className="about-title">Experience at startups </span><br/><br/>
                  Most of my recent work has been focused around startups and tools for creative people. Previously I helped shipped Lounge a virtual hq app, before that I worked for Skillshare, a online learning community for creatives. In the past I have worked on smarth cities multiplatform apps. Through this process, I have gained a good understanding of what it's like to work with intricate systems and technical constraints.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                <span className="about-title">Education and Skills</span><br/><br/>
                I finished the Holberton School Fullstack Software Engineer program, with strong knowledge in Algorithms, C and Python. I am proficent in Javascript, NodeJs, Reactjs, Material-UI, Sass, Stylus, Flask among others in fact, I designed and <a href="https://github.com/hermy0211/portfolio" target="_blank" rel="noopener noreferrer">coded<img className="link-icon" src={this.state.link} alt="Link Icon"/></a> this portfolio myself! My experiecen working with startups gave me a strong sense of design and user experience.<br/><br/><br/>
                Feel free to contact me for any inquiries about my portfolio and work opportunities!
                </div>
              </div>
            }
        </section>
        <div className="about-resume">
          <a href={resume} download className="about-download-button">DOWNLOAD CV</a>
        </div>
      </div>
    );
  }
}

export default About;
