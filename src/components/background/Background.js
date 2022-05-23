import React from 'react'
import BackgroundItem from './BackgroundItem';

const Background = ({children}) =>
{
    const samples =["[C#]",
                    "[C++]",
                    "[F#]",
                    "[ReactJS]",
                    "[Node.js]",
                    "[SpringBoot]",
                    "[Java]",
                    "[Hibernate]",
                    "[Docker]",
                    "[Linux]",
                    "[PHP]",
                    "[MongoDB]",
                    "[Github]",
    ];
    let list = [];
    const generateItems = () => {
        samples.forEach(element => {
            list.push(<BackgroundItem key={element} x={50} y={50}>{element}</BackgroundItem>);
        });
        return list;
    }

    return (<>
        {children}
        {generateItems()}
        </>
    );
}
export default Background;