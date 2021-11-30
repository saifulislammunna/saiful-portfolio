import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Projects.css'
const Projects = () => {
    const [projects, setProjects] = useState([]);
     
    
    useEffect(() => {
        fetch('https://guarded-beach-88441.herokuapp.com/works')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    

     
  
    return (
        <div >
             <h2 className="text-start   p-5">My Projects:</h2>
         <div className="service-container ">
                     
                 {
               projects.map( project => <Project 
                project ={project}
                key ={project.name}
              
               >

               </Project>)
             }
               
                 
        </div>
        </div>
    );
};

export default Projects;