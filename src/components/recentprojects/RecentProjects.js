import react from "react";
import k3d from './../../assets/images/k3d.png';
import jarlvpn from './../../assets/images/jarlvpn.png';
import pswmgr from './../../assets/images/pswmgr.png';
import GitButton from '../techstack/gitbutton/GitButton';

const RecentProjects = () => {
    return(<>
        <section className="section-normal" id="projects">
            <h1 className="section-header">Recent projects: </h1>
            <div className="project-container">
                <div className="project-item">
                    <div className="project-sample">
                           <img src={k3d} alt="k3d website image"></img>
                    </div>
                    <div className="project-desc">
                        <h2>K3D - 3D Printing & CNC Services.</h2>
                        <hr className="hr-balls"></hr>
                        <span>
                        A company website made for a local CNC/3D printing startup.
                        It serves the purpose of an ordering platform and represents a company on the internet.
                        Main goal of this website was to help with order management and simplify the whole process of
                        ordering.
                        </span>
                        <div className="project-buttons">
                            <a target="_blank" rel="noopener noreferrer" href={"http://157.230.104.23/"}>Demo</a>
                            <GitButton link={"https://github.com/zeroche-dev/3d_printing_frontend"}>3d_printing_frontend</GitButton>
                            <GitButton link={"https://github.com/byko-dev/3d_print_api"}>3d_print_api</GitButton>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-sample">
                        <img src={jarlvpn} alt="jarlvpn website image"/>
                    </div>
                    <div className="project-desc">
                        <h2>JarlVPN - We care about privacy.</h2>
                        <hr className="hr-balls"></hr>
                        <span>
                        JarlVPN is a startup that wants to bring faster and truly anonymous wireguard VPNs to the market.
                        This website was entirely designed and coded from scratch by me and the JarlSec team,
                        which also included byko-dev. The whole website is fully complete and functional,
                        but it awaits proper funding.
                        </span>
                        <div className="project-buttons">
                            <a target="_blank" rel="noopener noreferrer" href={"http://157.230.111.141:8080/"}>Demo</a>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-sample">
                        <img src={pswmgr} alt="password manager screenshot"/>
                    </div>
                    <div className="project-desc">
                        <h2>Crossplatform Password Manager</h2>
                        <hr className="hr-balls"></hr>
                        <span>
                        Simple CRUD Password Manager written in Nodejs Express + React + Electron for Crossplatform compatibility.
                        Works on both Linux and Windows.
                        </span>
                        <div className="project-buttons">
                        <GitButton link={"https://github.com/zeroche-dev/react-electron-passwd-manager"}>react-electron-passwd-manager</GitButton>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>);
}
export default RecentProjects;