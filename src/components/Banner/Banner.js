import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';
import { Button  } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    const textRef = useRef();
    useEffect(()=> {
       
        init(textRef.current, {
             showCursor: true,
             backDelay:  1500,
             backSpeed: 70,
              strings: ['Front-End Web-developer 💻'] })


    },[])
    return (
        <div className="background-image flexible-container d-flex">
        <div className="left-container  half-width p-5">
             <div className="text-container">
                 <h1 className="fs-1 fw-bold banner-text  " >Hi There, I'm <br />
                 Saiful Islam.</h1>

                   <h3 className="text-animation fs-1 banner-text"> <span  ref={textRef}></span></h3>  
                 <a href="saiful-islam-resume.pdf" download="Saiful  saiful-islam-resume.pdf">
                 <Button  className="btn">Download Resume </Button>
                 </a>
             </div>
        </div>
        <div className="right-container half-width ">
             <div className="img-container ">
             <img width="90%" src="assets/man.png" alt="" />
             </div>
        </div>
    </div>
    );
};

export default Banner;