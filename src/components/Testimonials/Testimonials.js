
import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

export default function Testimonials(){
    const [testimonials, setTestimonials] = useState([]);
    
    
    useEffect(() => {
        fetch('https://guarded-beach-88441.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, []);

    return (
    <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonial-part">
            {
                   testimonials.map(testimonial => <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
          {/*   {testimonials.map((testimonial) => (
                
                <div className={testimonial.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user
                        " src={testimonial.img}alt="" />
                        <img className="right" src={testimonial.icon} alt="" />
                         </div>
                        <div className="center">
                      {testimonial.desc}
                        </div>
                        
                       <div className="bottom">
                                <h3>{testimonial.name}</h3>
                                <h4>{testimonial.title}</h4>
                      </div>
                        
                   
                </div>
                  ))} */}
            </div>
    </div>
    );
};