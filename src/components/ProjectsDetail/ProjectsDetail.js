 
import React, { useEffect, useState } from 'react';
import { Button  } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectsDetail.css';


const ProjectsDetail = () => {
    const { _id} = useParams();
    const [service,setService] = useState( []);
    AOS.init();
    // console.log(params);
    useEffect(()=>{
       
        fetch(`https://guarded-beach-88441.herokuapp.com/works`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const selected = data.find ( s => s._id === _id)
               console.log(selected) 
               
               setService(selected);
        });
    },[_id])
    return (
        <div className="service-detail">
           <div className="service-container pt-5">
           
           <div
            
       className="service-img" data-aos="flip-right"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000" >
             <img    width="500"  src={service.pic}  alt=""/>
           </div>
            <div data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="service-img ">
            <img     width="400" src={service.img}  alt="" />
            </div>
           <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className="service-img  ">
            <img width="400"  src={service.thumb}  alt="" />
            </div>
           </div>
           
           <div className="d-flex p-3 selected-item align-items-center justify-content-center">
                      <div className=" selected-item  d-flex  align-items-center      justify-content-center p-5">
         
             
                       <h1 className="pb-2 ">{ service.name} </h1>
                       <ul>
                              <li>{service.point1} </li>
                              <li> {service.point2}</li>
                              <li>{service.point3}</li>
                              <li>{service.point4}</li>
                              <li>{service.point5}</li>
                       </ul>
                            
                               
                       </div >
            
                         <div className="d-flex   ">
                            <a href={service.livelink}> <h5 className="link">Live-website-link</h5></a>
                             <a href={service.clientlink}><h5 className="link">Github-client-link</h5></a>
                            <a href={service.serverlink}> <h5 className="link">Github-server-link</h5></a>

                         </div>
           </div>
            
           
         </div>
     
        
    );
};

export default ProjectsDetail;
 
