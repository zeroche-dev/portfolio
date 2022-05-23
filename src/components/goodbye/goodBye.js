import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GitButton from '../techstack/gitbutton/GitButton';

const GoodBye = () => {
    return(<><section className='section-normal' style={{height: "fit-content", minHeight: "unset"}}>
            <div className='goodbye'>
                <h1 >Visit github to see more of my work!</h1>
                <GitButton link={"https://github.com/zeroche-dev"} size={"big"}>zeroche-dev</GitButton>
            </div>
        </section></>)

}

export default GoodBye;