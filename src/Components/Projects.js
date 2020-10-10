import React from "react";

import babyname from "../img/babyname.png";
import chat from "../img/chat.png";
import country from "../img/country.png";
import job from "../img/job.png";
import quot from "../img/quot.png";
import tvShow from "../img/tv-show.png";
import weather from "../img/weather.png";
import {FaGithub } from 'react-icons/fa';

const Projects = ()=>{
    return(
        <div className="projects container">
          <div className="project">
            <a href="https://cyf-naderakhgari-chat-react.netlify.app/" target="-blank">
          <img  src={chat} alt="chat project" className="project-img" />
            </a>
          <a href="https://github.com/naderakhgari/cyf-chat-react" target="_blank" className="header-link project-margin"><FaGithub /> Repository</a>
          </div>
          <div className="project">
            <a href="https://cyf-naderakhgari-countries-project.netlify.app" target="-blank">
          <img  src={country} alt="country project" className="project-img" />
            </a>
          <a href="https://github.com/naderakhgari/countries-project" target="_blank" className="header-link project-margin"><FaGithub /> Repository</a>
          </div>
          <div className="project">
            <a href="https://cyf-naderakhgari-jobs-react.netlify.app/" target="-blank">
          <img  src={job} alt="job project" className="project-img" />
            </a>
          <a href="https://github.com/naderakhgari/job-listings-react" target="_blank" className="header-link project-margin"><FaGithub /> Repository</a>
          </div>
          <div className="project">
            <a href="https://cyf-naderakhgari-guote-generator.netlify.app" target="-blank">
          <img  src={quot} alt="quot project" className="project-img" />
            </a>
          <a href="https://github.com/naderakhgari/quotes-react" target="_blank" className="header-link project-margin"><FaGithub /> Repository</a>
          </div>
          <div className="project">
            <a href="https://cyf-naderakhgari-tv.netlify.app/" target="-blank">
          <img  src={tvShow} alt="tv-show project" className="project-img" />
            </a>
          <a href="https://github.com/naderakhgari/tv-show-dom-project" target="_blank" className="header-link project-margin"><FaGithub /> Repository</a>
          </div>
          <div className="project">
            <a href="https://cyf-naderakhgari-darksky-api.netlify.app" target="-blank">
          <img  src={weather} alt="weather project" className="project-img" />
            </a>
          <a href="https://github.com/naderakhgari/cyf-chat-react" target="_blank" className="header-link project-margin"> <FaGithub /> Repository</a>
          </div>
          <div className="project">
            <a href="https://cyf-naderakhgari-baby-names.netlify.app" target="-blank">
            <img  src={babyname} alt="babyname project" className="project-img" />
            </a>
            <a href="https://github.com/naderakhgari/cyf-chat-react" target="_blank" className="header-link project-margin"><FaGithub /> Repository</a>
          </div>
        </div>
    )
}
export default Projects;