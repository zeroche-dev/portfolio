import React from 'react';
import Hero from './hero/Hero';
import TechStack from './techstack/TechStack';
import RecentProjects from './recentprojects/RecentProjects';
import GoodBye from './goodbye/goodBye';
const Home = () => {
    return(<>
        <Hero/>
        <TechStack/>
        <RecentProjects/>
        <GoodBye/>
    </>);
}
export default Home;