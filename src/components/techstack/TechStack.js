import react from "react";
import { FaAndroid, FaDocker, FaGithub, FaNodeJs, FaPhp, FaReact, FaRedhat, FaToggleOff } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";
import GitButton from "./gitbutton/GitButton";
import springboot from '../../assets/images/springboot.png'
import redux from '../../assets/images/redux.png'
import processor from '../../assets/images/processor.png'
import electron from '../../assets/images/electron.png';
import mongo from '../../assets/images/mongo.png';
import postgresql from '../../assets/images/postgresql.png';

const TechStack = () => {
    return (<>
        <section className="section-normal" id="techstack">
        <h1 className="section-header">What is my tech stack?</h1>
            <div className="techstack">
                <div className="techstack-item mobile-item-4">
                        <img src={processor} height={"110px"} width={"110px"}></img>
                        <span>Technologies I used: </span>
                        <span>Docker <FaDocker  style={{marginTop: "10px", color: "#0db7ed"}} size={"21px"}></FaDocker></span>
                        <span>Github <FaGithub  size={"21px"}></FaGithub></span>
                        <span>Electron <img src={electron} height={"21px"} width={"21px"}></img></span>
                        <span>Android Studio <FaAndroid color={"#a4c639"} size={"21px"}></FaAndroid></span>
                        <span>MongoDB <img src={mongo} height={"21px"} width={"21px"}></img></span>
                        <span>PostgreSQL <img src={postgresql} height={"21px"} width={"21px"}></img></span>
                        <span>Node/Express.js <FaNodeJs height={"21px"} width={"21px"}></FaNodeJs></span>
                        <hr className="hr-balls"/> 
                        <span>OS Admin(Tomcat, Nginx, Apache.. and more)</span>
                        <hr className="hr-balls"/>
                    </div>
                    <div className="techstack-item mobile-item-1">
                        <FaReact className="react" color="#61DBFB" size={"150px"}/>
                        <span>ReactJS Frontend</span>
                        <span>(Redux <img src={redux} height={"20px"} width={"20px"}/>, Sass,<br/>
                        MVC, RestAPI)</span>
                        <hr className="hr-balls"/>
                        <span>Currently working on:</span>
                        <span>Learning TypeScript</span>
                        <hr className="hr-balls"/>
                        <span>Recent projects: </span>
                        <GitButton link={"https://github.com/zeroche-dev/portfolio"}>zeroche-dev/portfolio</GitButton>
                    </div>
                    {/* To be honest, I'm in love-hate relation ships with this language :P */}
                    <div className="techstack-item mobile-item-3">
                        <FaPhp size={"150px"} color={"purple"}></FaPhp>
                        <span>PHP</span>
                        <span>(MVC, RestAPI)</span>
                        <hr className="hr-balls"/>
                        <span>Currently working on: </span>
                        <span>Keeping myself updated with new standards</span>
                        <span style={{fontSize: "0.5em", lineHeight: "0.8em"}}></span>
                        <hr className="hr-balls"/>
                        <span>Recent projects: </span>
                        <GitButton> [private repo] </GitButton>
                    </div>
                    <div className="techstack-item mobile-item-2">
                        <img src={springboot} height={"150px"} width={"150px"}></img>
                        <span>Java Springboot Backend</span>
                        <span>(Hibernate, MVC, RestAPI, SpringSecurity, JWT)</span>
                        <hr className="hr-balls"/>
                        <span>{"Currently working on: "}</span>
                        <span>Learning Node.js + Express</span>
                        <hr className="hr-balls"/>
                        <span>Recent projects: </span>
                        <GitButton >[private repo] </GitButton>
                    </div>
            </div>    
    </section></>)
}
export default TechStack;