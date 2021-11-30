import React from 'react';
import { Button  } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="background-image flexible-container d-flex">
        <div className="left-container  half-width p-5">
             <div className="text-container">
                 <h1 className="fs-1 fw-bold banner-text  " >Hi There, I'm <br />
                 Saiful Islam.</h1>
                 {/* <h3 className="text-animation fs-1 banner-text"> <span  ref={textRef}></span></h3> */}
                 <a href="saiful-islam-resume.pdf" download="Saiful  saiful-islam-resume.pdf">
                 <Button  className="btn">Download Resume </Button>
                 </a>
             </div>
        </div>
        <div className="right-container half-width ">
             <div className="img-container ">
             <img src="assets/man.png" alt="" />
             </div>
        </div>
    </div>
    );
};

export default Banner;