import React from 'react';
/* import { Card, CardGroup } from 'react-bootstrap'; */
 import "./Testimonial.css";

const Testimonial = ({ testimonial}) => {
    const { title, name, desc, icon, img } = testimonial;
       return(
       
        <div>
            <div className="single-product p-2">
                 
            <div className={testimonial.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="bam" alt="" />
                        <img className="user
                        " src={ img}alt="" />
                        <img className="dan" src={ icon} alt="" />
                         </div>
                        <div className="center">
                      { desc}
                        </div>
                        
                       <div className="bottom">
                                <h3>{ name}</h3>
                                <h4>{ title}</h4>
                      </div>
                        
                   
                </div>
                
                   {/* <CardGroup >
                     <Card  className=" ">
                     <img src="assets/right-arrow.png" className="left" alt="" />
                          <Card.Img variant="top" src={ img}className="  "  width="450" height="350" />
                         <Card.Body>
                        
                             <img className="right" src={icon} alt="" />
                             
                         
                         <p> { desc}</p>
                         
                        
                       <div className="bottom">
                                <h3>{ name}</h3>
                                <h4>{ title}</h4>
                      </div>
                            
                      </Card.Body>
                    </Card>
                </CardGroup> */}
            </div>
      
        </div>
       )
};

export default Testimonial;