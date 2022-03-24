import React from "react";
import profilepic from '../images/profileimage.jpg'
import TypeAnimation from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import "../css/About.css"

export default class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="flex h-screen">
          <div className="m-auto">
            <img className = "photo w-40 h-40 sm:w-50 sm:h-50 relative" src= {profilepic} alt=""/>
            <span className="sm:text-4xl text-3xl relative px-20px h-50px inline-block z-9 sm:px-0 sm:right-6">
                <TypeAnimation
                  cursor={false}
                  sequence={['.dev', 3000]}
                  className="dev"/>
              </span>
            <h1 className="sm:text-4xl text-3xl font-medium text-white mt-2px sm:relative sm:right-5">
              <TypeAnimation
                cursor={false}
                sequence={['khalidh', 4000]}
                className="title"/>
            </h1>
            <div className="info-div sm:flex sm:flex-row sm:justify-between sm:flex-wrap relative">
              <div className="about-info name absolute">Khalid Hussain '22</div>
              <div className="bar1 absolute">|</div>
              <div className="about-info majors absolute">Computer Science & Arabic</div>
              <div className="bar2 absolute">|</div>
              <div className="about-info college absolute">Carleton College</div>
            </div>
            <div className="socials flex flex-row justify-between flex-wrap relative z-2">
              <div className="email absolute"><a title="Send an Email" href="mailto:hussaink@carleton.edu"><FontAwesomeIcon icon={faEnvelope} size="xl" /></a></div>
              <div className="bar1-s absolute">|</div>
              <div className="github absolute"><a title="GitHub Profile" href="https://github.com/khalidh223" ><FontAwesomeIcon icon={faGithub} size="xl" /></a></div>
              <div className="bar2-s absolute">|</div>
              <div className="linkedin absolute"><a title="LinkedIn Profile" href="https://www.linkedin.com/in/khalid--hussain/" ><FontAwesomeIcon icon={faLinkedin} size="xl"/></a></div>
              <div className="bar3-s absolute">|</div>
              <div className="facebook absolute"><a title="Facebook Profile" href="https://www.facebook.com/khalid.hussain.90663/" ><FontAwesomeIcon icon={faFacebook} size="xl"/></a></div>
            </div>
          </div>
        </div>
        <ul class="circles z-9">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
        <ul class="circles2 z-9">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
      </section>
    )
  };
}