import React from 'react'
import image from '../../assets/images/image.jpg';
import TypeAnimation from 'react-type-animation';
import Background from '../background/Background';

const Hero = () => {
    return (<>
        <section className="section-normal" id="hero">
            <Background></Background>
            <div className="hero">
                <div className="hero-inner">
                    <div className="hero-motto">
                        <TypeAnimation
                            cursor={false}
                            sequence={["Hi! My name is Dawid. ", 1000]}
                            wrapper="span"
                            repeat={1}
                            />
                        <TypeAnimation
                            cursor={true}
                            sequence={[2500, "I'm passionate fullstack developer looking for new expiriences and challenges! "]}
                            wrapper="p"
                            repeat={1}
                        />
                    </div>
                    <div className="hero-image">
                        <img src={image}></img>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Hero;