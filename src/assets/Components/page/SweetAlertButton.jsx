import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const SweetAlertButton = () => {
  const [email, setEmail] = useState('');
  const name = email

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  useEffect(()=>{
    if(email){
      handleSubmit()
    }
  },[email])

  const handleSubmite = () => {
    const serviceId = 'service_gmail';
    const templateId = 'template_itfcdzh';
    const userId = 'KUSIRMBeX5IW17Xnx';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: email,
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
      title: 'Enter Your Email',
      inputLabel: 'I can discuss this project with you in 10 minutes. ',
      input: 'email',
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
      <button  onClick={openEmailPopup }>Open Email Popup</button>
    </div>
  );
}

export default SweetAlertButton;
