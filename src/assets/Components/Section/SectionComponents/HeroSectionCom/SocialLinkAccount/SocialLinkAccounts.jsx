import React from 'react'
// IMPORT ICON FROM REACT
import { FaFacebook, FaTwitter, FaInstagram,  FaLinkedinIn, FaYoutube, FaBloggerB } from 'react-icons/fa';

function SocialLinkAccounts(props) {

    const {platform, iconName, link} =props.AccountLink


    const getIcon = (iconName) => {
        switch (iconName) {
          case 'FaFacebook':
            return <FaFacebook size="25px"/>;
          case 'FaLinkedinIn':
            return <FaLinkedinIn size="25px"/>;
          case 'FaYoutube':
            return <FaYoutube size="25px"/>;    
          case 'FaTwitter':
            return <FaTwitter size="25px" />;
          case 'FaInstagram':
            return <FaInstagram size="25px" />;
            case 'FaBloggerB':
                return <FaBloggerB size="25px" />;
          default:
            return null;
        }
      };
    

  return (
    <>
    <div className=" p-1 lg:h-10 lg:w-10 bg-blue-500 rounded-md flex justify-center items-center text-white shadow-lg hover:scale-125 transform transition-transform duration-300  ">
        <a href={link} target="_blank"  rel="noopener noreferrer" >
            {getIcon(iconName)}
        </a>   
    </div>

    </>
  )
}

export default SocialLinkAccounts