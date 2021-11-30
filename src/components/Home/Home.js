import React from 'react';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Projects/>
            <ContactMe/>
        </div>
    );
};

export default Home;