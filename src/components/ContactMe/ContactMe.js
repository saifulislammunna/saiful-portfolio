import React, { useState }     from 'react';
 
import emailjs from 'emailjs-com';

import './ContactMe.css';
 

const ContactMe = () => {
   
     const [message,setMessage] = useState(false)  
    

  function sendEmail(e){
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_ybgp0fl', 'template_vjqi89k', e.target, 'user_AsinyqnRoCIeoj17Wk9Bn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
       <div className=" ">
            <div className="contact" id="contact">
           <div className="left">
                 <img src="assets/shake3.png" alt="" />
           </div>
           <div className="right">
               <h2>Contact Me</h2>
               <form onSubmit={sendEmail}  >
                   <input type="text" placeholder="name" name="name" />
                   <input type="text" placeholder="Email" name="email"/>
                   <textarea placeholder="Message" name="message"></textarea>
                   <button   type="submit">Submit</button>
                    {message && <span>Thanks, I'll reply ASAP:)</span>}  
                   
               </form>
           </div>
       </div>
          
        </div>
    );
};

export default ContactMe;