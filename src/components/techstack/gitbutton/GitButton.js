import React from 'react'
import { FaGithub } from 'react-icons/fa';

const GitButton = ({link, children, privaterepo, size}) => {

    const onClick = () => {
        !privaterepo && link && window.open(link);
    }

    return (<>
        <button className={size === "big" ? "gitbutton-big" :"gitbutton"} onClick={()=>onClick()}>
            <FaGithub size={size === "big" ? "1.5em" : "25px"}></FaGithub>
            <span >{children}</span>
        </button>
    </>)
}
export default GitButton;