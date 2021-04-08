import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import Article from './Article.js';
import articleone from './img/article-tn-01.png';
import articletwo from './img/article-tn-02.png';
import articlethree from './img/article-tn-03.png';
import articlefour from './img/article-tn-04.png';
import articlefive from './img/article-tn-05.jpeg';
import articlesix from './img/article-tn-06.png';

class Articles extends Component {
  state = {
    articleOneImage: articleone,
    articleTwoImage: articletwo,
    articleThreeImage: articlethree,
    articleFourImage: articlefour,
    articleFiveImage: articlefive,
    articleSixImage: articlesix,
    hamburgerState: "off"
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
              <div className="articles-mobile"><Link to="/articles" className="active">Articles</Link></div>
              <div className="about-mobile"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="navigation-sub">
            <div className="work"><Link to="/">Work</Link></div>
            <div className="articles"><Link to="/articles" className="active">Articles</Link></div>
            <div className="about"><Link to="/about">About</Link></div>
          </div>
        </div>
          <div className="designer">
            
          </div>
          <div className="speciality">
            Full-stack Software Development
          </div>
        </section>
        <section className="articles">
          {window.innerWidth<=1009 ?
            <div className="left">
               <p className="projects-intro">
                Hey! I'm Luis, <span className="bold">Welcome to my portafolio!</span><br/> I'm a Full-stack software Engineer,
                I have +5 years of experiences creating products and businesses for different needs and customers,
                and +3 years coding web and mobile interfaces<br/>
              </p>
              <p className="projects-intro">
                  I design intuitive digital experiences in which <span className="bold">every element serves a purpose</span>. My designs give form to <span className="bold">product visions</span>, and <span className="bold">arouses emotion</span> in billions of users.
              </p>
              
              <Article
                aos="fade-up"
                link="https://medium.com/@luiscode92/how-to-code-simple-shell-in-c-312ee5dbe154"
                class="article-default"
                image={this.state.articleFourImage}
                title="How to code a shell in C"
                subtitle="Let me intruduce you to Shellby"
                date="November 16th, 2018"
                dateClass="article-date one-line"
                index="0"
              />
            
            </div> :
            <div className="left">
              <p className="projects-intro">
                Hey! I'm Luis, <span className="bold">Welcome to my portafolio!</span><br/> I'm a Full-stack software Engineer,
                I have +5 years of experiences creating products and businesses for different needs and customers,
                and +3 years coding web and mobile interfaces<br/>
              </p>
              <p className="projects-intro">
                  I design intuitive digital experiences in which <span className="bold">every element serves a purpose</span>. My designs give form to <span className="bold">product visions</span>, and <span className="bold">arouses emotion</span> in billions of users.
              </p>
            
              <Article
                aos=""
                link="https://medium.com/@luiscode92/how-to-code-simple-shell-in-c-312ee5dbe154"
                class="article-default"
                image={this.state.articleFourImage}
                title="How to code a shell in C"
                subtitle="Let me intruduce you to Shellby"
                date="April 16th, 2020"
                dateClass="article-date one-line"
                index="0"
              />
           
            </div>
          }
          {window.innerWidth<=1009 ?
            <div className="right">
             
            </div> :
            <div className="right">
              
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Articles;
