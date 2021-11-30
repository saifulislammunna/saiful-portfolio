import React from 'react';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Projects/>
            <Testimonials/>
            <ContactMe/>
        </div>
    );
};

export default Home;