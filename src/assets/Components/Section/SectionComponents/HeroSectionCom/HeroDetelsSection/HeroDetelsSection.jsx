import React, { useState, useEffect } from 'react';


//IMPORT REACT COMPONETS
import TextTepeAnimationParent from '../TextTypeAnimation/TextTepeAnimationParent';
import WorkAccountLink from '../WorkAccountLink/WorkAccountLink';
import SocialLinkAccount from '../SocialLinkAccount/SocialLinkAccount';

// IMG
// import wahidahmed from '../img/wahidahmed.png'
const  wahidahmed = 'https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/401136713_122108827958100469_9095465446854084174_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QyoPmQ8eVCwAX9YpozG&_nc_ht=scontent.fdac24-3.fna&oh=00_AfB48N0X_UH4JPkSiTOm7vE6iaDAlQn_5cPR4FgLllKOiA&oe=6559A049'

function HeroDetelsSection() {

    // TAILWIND COLOR CODE FOR DAYANAMIC
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500'];
    const colors2 = ['bg-red-900/50', 'bg-blue-900/50', 'bg-green-900/50', 'bg-purple-900/50', 'bg-yellow-900/50'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    // USEEFFECT FOR CHANGING COLOR
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);

    // TAILWIND COLOR CODE FOR DAYANAMIC
    const currentColor = colors[currentColorIndex];
    const currentColor2 = colors2[currentColorIndex];

   const genarelconti = `${currentColor} ${currentColor2}  hover:scale-105 transition duration-300 shadow-xl text-white rounded-tl-[200px] rounded-br-[200px] backdrop-blurbackdrop-blur-xl`
   const imgcointi = `flex justify-center items-center`
   const imgre =`rounded-full mt-4  p-3 bg-white`

   const h1respo = `uppercase ml-3 font-semibold `



  return (

    <div className={`${genarelconti} w-[90%] h-[720px] sm:h-[650px] flex flex-col lg:flex-row  lg:w-[70%] lg:h-[450px]   items-center pt-10`}> 
        <div className={`${imgcointi} lg:w-[30%] `}>
            <img src={wahidahmed} className={`${imgre} lg:h-[250px] lg:w-[250px] w-[200px] h-[200px] p-2 `}  alt="" />
        </div>
        <div className={`items-center w-[70%] justify-center`}>
            <h1 className={`${h1respo} w-full lg:text-[60px] l text-start mt-6 lg:mb-16 text-4xl`}>WAHID AHMED</h1>
            <TextTepeAnimationParent />
            <p className=' lg:text-[16px] text-sm  lg:pl-0 lg:mt-2'>
                    I'm freelancer, I specialize in WordPress, Webflow, and Frontend Development. With over two years of hands-on experience in this dynamic field, I possess a deep understanding of crafting exceptional websites. My expertise extends to creating seamless and visually appealing websites using platforms such as WordPress, Webflow, Shopify, and React. Your project is in capable hands, as I am committed to delivering top-notch results tailored to your unique needs.
            </p>
            <div className=" lg:pr-16 gap-2  flex flex-col mt-5 lg:mt-18 lg:flex-row justify-between mb-2">
                <SocialLinkAccount />
                <WorkAccountLink />
            </div>
        </div>
    </div>

  )
}

export default HeroDetelsSection