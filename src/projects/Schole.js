import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img00 from '../img/schole-img00.png';
import img01 from '../img/schole-img01.png';
import img02 from '../img/schole-img02.png';
import img03 from '../img/schole-img03.png';
import img04 from '../img/schole-img04.png';
import img05 from '../img/schole-img05.png';
import img06 from '../img/schole-img06.png';
import img07 from '../img/schole-img07.png';
import img08 from '../img/schole-img08.png';

class Schole extends Component {
  state = {
    logoImage: img00
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content schole">
        <div className="cover">
          <ProjectNav
            logoColor="#BFC1C4"
            menuColor="#BFC1C4"
            logo={this.state.logoImage}
            title={["Scholé", <br/>, "Website Renewal"]}
            domain="PC / Mobile Web"
            roles="UX: Anne Lee, Sooyeon Kang"
            rolesTwo="UI: Jihoon Choi, Minsoon Jang"
            date="2016.10 - 2017.01"
            firm="ST Unitas"
          />
          <img src={img01} alt="Cover" className="cover-image"/>
        </div>
        <div className="summary">
        <div className="summary-container">
          <div className="summary-container-left">
            <div className="content-title white">Summary</div>
            <div className="content end white">
              In this project, I proposed a strategy to leverage various stakeholders' needs, and renovated the entire Scholé website to align with this strategy. This resulted in a 670% increase in the number of professionals registering for the offline keynotes.
            </div>
          </div>
          <div className="summary-container-right">
            <div className="content-title white">Contribution</div>
            <div className="content end white">
            • Interviewed stakeholders<br/>
            • Proposed product strategy<br/>
            • Created wireframes and specifications<br/>
            • Worked closely with visual designers and engineers to ship final product
            </div>
          </div>
        </div>
        </div>
        <div className="background">
          <div className="stage-title stage-gray">ABOUT</div>
          <div className="content-title-second">Job Training through Real Project Documents</div>
          <div className="content end">
            Scholé is a for-profit education organization that offers vocational training for entry-level workers by teaching with real project documents from top firms. It offers edited versions of the documents with commentary and also hosts offline case study lectures with the actual project owners.
          </div>
        </div>
        <div className="problem">
          <div className="stage-title stage-gray">PROBLEM</div>
          <div className="content-title-second middle">Reluctancies with Supplying Confidential Content</div>
          <img src={img02} alt="Diagram of Stakeholders" className="image"/>
          <div className="content end">
            Although the concept of being able to access insider information of projects was appealing to entry-level workers, we had trouble supplying enough material to release each week, as most companies were not open to sharing their trade secrets.
          </div>
        </div>
        <div className="challenge">
          <div className="content-title white">Design Challenge</div>
          <div className="content end white">How might we create value for the content providers of an education platform?</div>
        </div>
        <img src={img07} alt="Prototype Sketches" className="prototypes"/>
        <div className="problem">
          <div className="stage-title stage-gray">APPROACH</div>
          <div className="content-title-second">Incentifying through the Promotion of Projects</div>
          <div className="content middle">
            We realized that we could incentify the companies by helping them promote their projects. In order to reinforce this value, we came up with the concept of ‘Project Awards’, emphasizing on every part of the website that the projects we had collected were carefully selected, innovative projects that had changed the industry.
          </div>
          <img src={img08} alt="Diagram of Value Proposition" className="image"/>
          <div className="content end">
            By giving them proper recognition, we were able to persuade many companies to contribute their content - laying the foundation of a more sustainable content distribution system.
          </div>
        </div>
        <div className="pc-designs">
          <div className="content-title white middle">Main Page</div>
          <img src={img03} alt="Main Page" className="image main"/>
          <div className="content-title white middle">Project Pages</div>
          <img src={img04} alt="Project Page" className="image project"/>
          <img src={img05} alt="Project Page Full" className="image project-full pc"/>
        </div>
        <div className="mobile-designs">
          <div className="content-title white middle">Mobile Screens</div>
          <img src={img06} alt="Main Page" className="image end"/>
        </div>
        <div className="thanks">
          <div className="thanks-text">Thanks for watching!</div>
          <div className="link"><a href="https://www.schole.ac" target="_blank" rel="noopener noreferrer">www.schole.ac</a></div>
        </div>
        <div className="bottom-navigation">
          <Link to="/prismvideo" className="link link-inactive">PRISM Video Editing Redesign</Link>
          <Link to="/prismlayout" className="link link-inactive">PRISM Layout Redesign</Link>
          <Link to="/schole" className="link link-active">Scholé Website Renewal</Link>
          <Link to="/framer30" className="link link-inactive">30 Days of Framer X</Link>
        </div>
      </section>
    );
  }
}

export default Schole;
