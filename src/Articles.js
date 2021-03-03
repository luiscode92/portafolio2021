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
                Hey, I'm Luis, I'm a Full-stack Software developer, passionate about, creativity, innovation, and empowerment, I always try to solve problems, through transversal thinking, I believe that nature has answers for everything, that's why I love the outdoors, I  am, the most intense worker when I do what I love
              </p>
              <Article
                aos=""
                link="https://uxplanet.org/how-learning-to-code-impacted-my-daily-job-as-a-designer-d0b9583927ab"
                class="article-default"
                image={this.state.articleTwoImage}
                title={["How Learning to Code Impacted", <br/>, "My Daily Job as a Designer"]}
                subtitle="Going Beyond the Communication"
                date="September 9th, 2018"
                dateClass="article-date two-line"
                index="0"
              />
              <Article
                aos="fade-up"
                link="https://uxplanet.org/30-days-of-framer-x-final-week-d5d1f923cbc1"
                class="article-default"
                image={this.state.articleFourImage}
                title="30 Days of Framer X : Final Week"
                subtitle="30 Prototypes in 30 Days"
                date="November 16th, 2018"
                dateClass="article-date one-line"
                index="1"
              />
              <Article
                aos="fade-up"
                link="https://uxplanet.org/designing-for-pc-apps-4554d8a0aa85"
                class="article-default"
                image={this.state.articleSixImage}
                image={this.state.articleThreeImage}
                title="Designing for PC Apps"
                subtitle="4 Concepts for PC App Design"
                date="July 14th, 2018"
                dateClass="article-date one-line"
                index="2"
              />
            </div> :
            <div className="left">
             <p className="projects-intro">
          Hey, I'm Luis, I'm a Full-stack Software developer, passionate about, creativity, innovation, and empowerment, I always try to solve problems, through transversal thinking, I believe that nature has answers for everything, that's why I love the outdoors, I  am, the most intense worker when I do what I love
          </p>
              <Article
                aos=""
                link="https://uxplanet.org/how-learning-to-code-impacted-my-daily-job-as-a-designer-d0b9583927ab"
                class="article-default"
                image={this.state.articleTwoImage}
                title={["How Learning to Code Impacted", <br/>, "My Daily Job as a Designer"]}
                subtitle="Going Beyond the Communication"
                date="September 9th, 2018"
                dateClass="article-date two-line"
                index="0"
              />
              <Article
                aos=""
                link="https://uxplanet.org/30-days-of-framer-x-final-week-d5d1f923cbc1"
                class="article-default"
                image={this.state.articleFourImage}
                title="30 Days of Framer X : Final Week"
                subtitle="30 Prototypes in 30 Days"
                date="November 16th, 2018"
                dateClass="article-date one-line"
                index="1"
              />
              <Article
                aos=""
                link="https://uxplanet.org/designing-for-pc-apps-4554d8a0aa85"
                class="article-default"
                image={this.state.articleSixImage}
                image={this.state.articleThreeImage}
                title="Designing for PC Apps"
                subtitle="4 Concepts for PC App Design"
                date="July 14th, 2018"
                dateClass="article-date one-line"
                index="2"
              />
            </div>
          }
          {window.innerWidth<=1009 ?
            <div className="right">
              <Article
                aos="fade-up"
                link="https://www.framer.com/blog/posts/code-for-designers/"
                class="article-default mobile"
                image={this.state.articleFiveImage}
                title={["The Designer's Guide", <br/>, "to Learning Code"]}
                subtitle="Resources to Help Reach Your Goal"
                date="May 1st, 2019"
                dateClass="article-date two-line"
                index="3"
              />
              <Article
                aos="fade-up"
                link="https://medium.com/@annelee_22736/ux-world-2017-fall-conference-summary-3399e847ce52"
                class="article-default"
                image={this.state.articleOneImage}
                title={["UX World 2017 Fall", <br/>, "Conference Summary"]}
                subtitle="Insights from Top Tech Companies"
                date="November 22nd, 2017"
                dateClass="article-date two-line"
                index="4"
              />
              <Article
                aos="fade-up"
                link="https://uxplanet.org/how-facebook-designs-for-vr-environments-d566127c11fe"
                class="article-last"
                image={this.state.articleSixImage}
                title={["How Facebook Designs for", <br/>, "VR Environments"]}
                subtitle="A Look into the Oculus Design"
                date="December 3rd, 2017"
                dateClass="article-date two-line"
                index="5"
              />
            </div> :
            <div className="right">
              <Article
                aos=""
                link="https://www.framer.com/blog/posts/code-for-designers/"
                class="article-default"
                image={this.state.articleFiveImage}
                title={["The Designer's Guide", <br/>, "to Learning Code"]}
                subtitle="Resources to Help Reach Your Goal"
                date="May 1st, 2019"
                dateClass="article-date two-line"
                index="3"
              />
              <Article
                aos=""
                link="https://medium.com/@annelee_22736/ux-world-2017-fall-conference-summary-3399e847ce52"
                class="article-default"
                image={this.state.articleOneImage}
                title={["UX World 2017 Fall", <br/>, "Conference Summary"]}
                subtitle="Insights from Top Tech Companies"
                date="November 22nd, 2017"
                dateClass="article-date two-line"
                index="4"
              />
              <Article
                aos=""
                link="https://uxplanet.org/how-facebook-designs-for-vr-environments-d566127c11fe"
                class="article-last"
                image={this.state.articleSixImage}
                title={["How Facebook Designs for", <br/>, "VR Environments"]}
                subtitle="A Look into the Oculus Design"
                date="December 3rd, 2017"
                dateClass="article-date two-line"
                index="5"
              />
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Articles;
