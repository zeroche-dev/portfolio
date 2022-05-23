import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faSnapchat, faInstagram, faGithub, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navi = () => {

     const scrollToId = (page, _block="center") => {
        const x = document.querySelector("#" + page);
        setTimeout(()=>{
            x.scrollIntoView({block: _block, behavior: 'smooth'});
        }, 50);
      }
      

    return ( 
    <nav className="navi">
        <input id="nav-burger" type="checkbox"></input>
        <div className="navi-item navi-icon">
            <span className="noselect navi-logo">{"<zeroche.dev/>"}</span>
           <label htmlFor="nav-burger">
                    <div className="navi-item-burger" onClick={()=>{}}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
            </label>
        </div>
        <div className="navi-refs">
            <div className="navi-item navi-button" onClick={() => scrollToId('hero')}>
            <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon> About 
            </div>
            <div className="navi-item navi-button" onClick={() => scrollToId('techstack')}>
                Tech stack {"</>"}
            </div>
            <div className="navi-item navi-button" onClick={() => scrollToId('projects')}>
                Projects {"</>"}
            </div>
            <div className="navi-item navi-button" onClick={() => window.open('https://github.com/zeroche-dev', '_blank')}>
            <FontAwesomeIcon icon={faGithub}/> Github
            </div>
            <div className="navi-item navi-button" onClick={() => window.open('https://www.linkedin.com/in/dawid-n-8aa5a6215/', '_blank')}>
                <FontAwesomeIcon icon={faLinkedinIn}/> LinkedIn
            </div>
        </div>
    </nav>);
}
export default Navi;