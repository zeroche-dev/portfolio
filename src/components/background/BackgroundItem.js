import React, {useEffect, useState, useRef} from 'react'
import reactDom from 'react-dom';

const BackgroundItem = ({children}) =>
{
    const [x, setX] = useState("50%");
    const [y, setY] = useState(50);
    const [opacity, setOpacity] = useState(0);
    const spanRef = useRef(null);
    const reposition = () => {
        let _x = (Math.floor(Math.random() * 80)) + 10;
        let _y = (Math.floor(Math.random() * 70)) + 10;
        //fix positioning
        let xliteral = "calc(" + _x + "% " + (_x < 50 ? "+ " : "- ")  + (1.2 * spanRef.current.clientWidth) + "px)";
        //                                                                mmagic number
        setX(xliteral); setY(_y);
    }
    useEffect(()=>{
        const timeout =  setTimeout(() => {
            setOpacity(1);
            reposition();
        }, 3000);
        return () => {
            clearTimeout(timeout);
            clearInterval(handle);
        }
    },[]);
    return(<><span ref={spanRef} className='background-item' style={{opacity: opacity, left: x, right: x,  top: y + "%", bottom:y + "%" }} color='red'>{children}</span></>)
}
export default BackgroundItem;