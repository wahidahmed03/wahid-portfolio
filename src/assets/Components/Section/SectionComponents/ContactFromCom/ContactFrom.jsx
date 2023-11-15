import React, { useState } from 'react';
//EMAIL API INPORT
import emailjs from 'emailjs-com';

//toastify API IMPORT
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaUser } from 'react-icons/fa'
import { BiLogoGmail, BiMessageRoundedDetail } from "react-icons/bi";

function ContactFrom() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Initialize EmailJS with your user ID
      emailjs.init("7xQGkO9wHZJlbicF0");
  
      // Set up the email template parameters
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };
  
      // Send the email using EmailJS
      emailjs.send('service_gmail', 'template_itfcdzh', templateParams)
        .then((response) => {
          console.log('Email sent successfully:', response);
          toast.success("Email sent successfully",)
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
  
      // Clear the form
      setName('');
      setEmail('');
      setMessage('');
    };
  


  return (
    <div>

       <form  onSubmit={handleSubmit}>
         <div className="w-full h-[500px] flex flex-col justify-center items-center ">
                <div className="relative my-3 w-[90%]">
                    <input type="text" className="pl-8 py-2 w-full border rounded focus:ring focus:ring-blue-300" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Name'/>
                    <div className="absolute top-3 left-2 text-gray-400">
                    <FaUser />
                    </div>
                </div>
                <div className="relative mt-3 w-[90%]">
                    <input type="email" className="pl-8 py-2 w-full border rounded focus:ring focus:ring-blue-300"  value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email'/>
                    <div className="absolute top-3 left-2 text-gray-400">
                    <BiLogoGmail />
                    </div>
                </div>
                <div className="relative my-5 w-[90%]">
                    <textarea  className="pl-8 h-40 py-2 w-full border rounded focus:ring focus:ring-blue-300"  value={message} onChange={(e) => setMessage(e.target.value)} required placeholder='message' />
                    <div className="absolute top-3 left-2 text-gray-400">
                    <BiMessageRoundedDetail />
                    </div>
                </div>
                 <button className='w-[90%] h-10 px-2 rounded-md bg-black text-white'  type="submit">Send</button>
                 <ToastContainer />
            </div>
        </form>
       </div>

  )
}

export default ContactFrom