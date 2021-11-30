import React from 'react';
import {Button,CardGroup,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons'; */
 


/* service component */
const Project = (props) => {
    const {img,name,description,_id} = props.project;
    const url = `/projects/${_id}`;  
    return (
       
        <div>
            <div className="single-service">
              {/* card group added */}
            <CardGroup >
  <Card  className=" ">
    <Card.Img variant="top" src={img} className="  p-5"  width="450" height="350" />
    <Card.Body>
      <Card.Title className="fs-2">   {name}</Card.Title>
       
      < p className="text-start"> {description}</p>
      <div>
       <Link to={url} >  <Button> {/* <FontAwesomeIcon icon={faInfo } /> */} Detail</Button>   </Link>  
      </div>
    </Card.Body>
      
    
    
      
    
  </Card>
  </CardGroup>
    </div>
            
        </div>
        
    );
};
/* exporting service component */
export default Project;