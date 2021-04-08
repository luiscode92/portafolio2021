import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import './Hamburgers.css';
import Project from './Project.js';
import projectone from './img/project-tn-01.png';
import projecttwo from './img/project-tn-02.png';
import projectthree from './img/hbnb.png';
import projectfour from './img/esquilo.png';

class Main extends Component {
  state = {
    projectOneImage: projectone,
    projectTwoImage: projecttwo,
    projectThreeImage: projectthree,
    projectFourImage: projectfour,
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
                <div className="work-mobile"><Link to="/" className="active">Work</Link></div>
                <div className="articles-mobile"><Link to="/articles">Articles</Link></div>
                <div className="about-mobile"><Link to="/about">About</Link></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work"><Link to="/" className="active">Work</Link></div>
              <div className="articles"><Link to="/articles">Articles</Link></div>
              <div className="about"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="designer">
          </div>
          <div className="speciality">
            Full-stack Software Development
          </div>
        </section>
        <section className="projects">
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
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/prismvideo"
                hmwClass="hmw"
                class="project-default"
                hmw={["Bus live tracker", <br/>, "for smartcities", <br/>, "and movile marketing"]}
                color="rgba(11, 156, 150, 0.95)"
                title="PUBLIC transportation"
                category="Mobile app"
                index="0"
              />
              <Project
                aos="fade-up"
                image={this.state.projectThreeImage}
                link="/schole"
                hmwClass="hmw hmw-exception"
                class="project-last"
                hmw={["Airbnb for long term rentals", <br/>, "segmented by needs", <br/>, "tastes and profile"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Airbnb clone"
                category="Web app"
                index="1"
          />
          </div> :
            <div className="left">
              <p className="projects-intro">
                    Hey! I'm Luis, <span className="bold">Welcome to my portafolio!</span><br/> I'm a Full-stack software Engineer,
                    I have +5 years of experiences creating products and businesses for different needs and customers,
                    and +3 years coding web and mobile interfaces<br/>
              </p>
              <p className="projects-intro">
                    I create intuitive digital experiencesin which <span className="bold">every element serves a purpose</span>. My creations gives form to <span className="bold">product visions</span>.
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/prismvideo"
                hmwClass="hmw"
                class="project-default"
                hmw={["Bus live tracker", <br/>, "for smartcities", <br/>, "and movile marketing"]}
                color="rgba(11, 156, 150, 0.95)"
                title="PUBLIC TRANSPORTATION"
                category="Mobile app"
                index="0"
              />
              <Project
                aos=""
                image={this.state.projectThreeImage}
                link="/schole"
                hmwClass="hmw"
                class="project-last"
                hmw={["Airbnb for long term rentals", <br/>, "segmented by needs", <br/>, "tastes and profile"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Airbnb Clone"
                category="Web app"
                index="1"
              />
            </div>
          }
          {window.innerWidth<=1009 ?
            <div className="right">
              <Project
                aos="fade-up"
                image={this.state.projectTwoImage}
                link="/experiences"
                hmwClass="hmw hmw-exception"
                class="project-default"
                hmw={["Live sessions class", <br/>, "that creates a more close and accessoble", <br/>, "teacher-student relationship."]}
                color="rgba(251, 192, 96, 0.95)"
                title="SKILLSHARE experiences"
                category="Web app"
                index="2"
              />
              <Project
                aos="fade-up"
                image={this.state.projectFourImage}
                link="/framer30"
                hmwClass="hmw hmw-exception"
                class="project-default"
                hmw={["Airbnb for long term rentals", <br/>, "segmented by needs", <br/>, "tastes and profile"]}
                color="rgba(114, 164, 238, 0.95)"
                title="Esquilo app"
                category="Mobile app"
                index="3"
              />
            </div> :
            <div className="right">
              <Project
                aos=""
                image={this.state.projectTwoImage}
                link="/experiences"
                hmwClass="hmw"
                class="project-default"
                hmw={["Live sessions class", <br/>, "that creates a more close and accessoble", <br/>, "teacher-student relationship."]}
                color="rgba(251, 192, 96, 0.95)"
                title="SKILLSHARE experiences"
                category="Web app"
                index="2"
              />
              <Project
                aos=""
                image={this.state.projectFourImage}
                link="/framer30"
                hmwClass="hmw"
                class="project-default"
                hmw={["Airbnb for long term rentals", <br/>, "segmented by needs", <br/>, "tastes and profile"]}
                color="rgba(114, 164, 238, 0.95)"
                title="Esquilo app"
                category="Mobile app"
                index="3"
              />
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Main;
