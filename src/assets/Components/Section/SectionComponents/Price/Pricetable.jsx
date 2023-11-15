import React, { useEffect, useState } from 'react'
import { AiFillApi } from "react-icons/ai";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

// CommonJS
// const Swal = require('sweetalert2')


function PriceTable(props) {
     const {PakegeName, PakageDetels , DetelsOne, Detelstwo, DetelsThe, Detelsfour, DetelsFive, DetelsSix, DetelsSeven, DetelsEight, DetelsNine, RegularPrice, Price, Catagory,imgurl} =  props.pricetable




     const [email, setEmail] = useState('');
     const name = email
     const massageinfo = ` PakegeName : ${PakegeName} ${' '} PakageDetels : ${PakageDetels} ${" "} Catagory : ${Catagory}  ${" "} RegularPrice : ${" "} ${RegularPrice} ${" "} Price  ${Price} `
   
     const handleEmailChange = (e) => {
       setEmail(e.target.value);
     };
     useEffect(()=>{
       if(email){
         handleSubmit()
       }
     },[email])
   
     const handleSubmit = () => {
       const serviceId = 'service_gmail';
       const templateId = 'template_itfcdzh';
       const userId = 'KUSIRMBeX5IW17Xnx';
   
       const templateParams = {
         from_name: name,
         from_email: email,
         message: massageinfo,
       };
   
       // Send email using EmailJS API
       emailjs.send(serviceId, templateId, templateParams, userId)
         .then((response) => {
           console.log('Email sent successfully:', response);
           // Close SweetAlert2 popup and show success message
           Swal.close();
           Swal.fire('Success!', 'Email sent successfully!', 'success');
         })
         .catch((error) => {
           console.error('Error sending email:', error);
           // Close SweetAlert2 popup and show error message
           Swal.close();
           Swal.fire('Error!', 'Failed to send email. Please try again.', 'error');
         });
     };




     const openEmailPopup = async () => {
    
          const result = await Swal.fire({
            title: 'Enter Your Email For Buy',
            input: 'email',
            inputLabel: 'I can discuss this project with you in 10 minutes. ',
            inputPlaceholder: 'Enter your email...',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: (inputEmail) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve(inputEmail);
                }, 1000);
              });
            },
          });
      
          if (result.isConfirmed) {
            setEmail(result.value);
            
          }
        };



  return (
    <div>
     <div>

            <div className="w-[300px] h-[760px] bg-white rounded m-4">
                <div className="w-full h-[170px]  flex justify-center mt-2">
                    <img  src={imgurl} className='w-[170px]  ' alt="" />
                </div>
                <div className="flex text-[25px]  flex-col h-[80px] text-white justify-center items-center bg-blue-600 mt-3 w-[105%] -ml-2">
                    <h3 className=' font-semibold uppercase text-center text-xl'>{PakegeName}</h3>
                </div>
                <div className=" text-sm py-2 px-6 text-center"><p>{PakageDetels}</p></div>
                <div className="ml-5 my-5 text-blue-600 ">
                   <div className="flex gap-1 items-center mt-4 ">
                        <AiFillApi size='18px' className={` text-blue-600`} />
                        <p className=' font-medium text-black'>{DetelsOne}</p>
                   </div>
                   <div className="flex gap-1 items-center  mt-2">
                        <AiFillApi size='18px' />  
                        <p className=' font-medium text-black' >{Detelstwo}</p>
                   </div>
                   <div className="flex gap-1 items-center mt-2">
                       <AiFillApi size='18px' />
                        <p className=' font-medium text-black' >{DetelsThe}</p>
                   </div>
                   <div className="flex gap-1 items-center mt-2">
                        <AiFillApi size='18px' /> 
                        <p className=' font-medium text-black' >{Detelsfour}</p>
                   </div>
                   <div className="flex gap-1 items-center mt-2">
                        <AiFillApi size='18px' />
                        <p className=' font-medium text-black' >{DetelsFive}</p>
                   </div>
                   <div className="flex gap-1 items-center mt-2">
                        <AiFillApi size='18px' />
                        <p className=' font-medium text-black' >{DetelsSix}</p>
                   </div>
                   <div className="flex gap-1 items-center mt-2">
                        <AiFillApi size='18px' />  
                        <p className=' font-medium text-black' >{DetelsSeven}</p>
                   </div>
                   <div className="flex gap-1 items-center mt-2">
                        <AiFillApi size='18px' />   
                        <p className=' font-medium text-black' >{DetelsEight}</p>
                   </div>
                   <div className="flex gap-1 items-center mt-2">
                        <AiFillApi size='18px' />   
                        <p className=' font-medium text-black' >{DetelsNine}</p>
                   </div>
                   <div className="flex gap-2 p-1 justify-center items-center mr-10">
                         <p className='line-through font-bold text-2xl'>{RegularPrice}</p>
                         <p className='text-3xl font-bold'>{Price}</p>
                   </div>
                </div>
                <div className="flex justify-center items-center my-2 ">
                    <button className=' w-[80%] h-[50px] bg-blue-700 rounded text-white 'onClick={openEmailPopup} >BUY NOW</button>

                </div>
            </div>
        </div>
    </div>


  )
}

export default PriceTable