import React, { useState, useEffect } from 'react';
import { FaReact, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaBloggerB, FaHtml5,FaBootstrap , FaWordpressSimple, FaShopify  } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiWebflow } from "react-icons/si";

function ServiceComponents(props) {
  const { ServiceName, ServiceIcon, ServiceDetals, ServiceBtn } = props.service;

  const iconMapping = {
    FaReact: FaReact,
    FaLinkedinIn: FaLinkedinIn,
    FaYoutube: FaYoutube,
    FaTwitter: FaTwitter,
    FaInstagram: FaInstagram,
    FaBloggerB: FaBloggerB,
    FaHtml5:FaHtml5,
    BiLogoTailwindCss:BiLogoTailwindCss,
    FaBootstrap:FaBootstrap,
    FaWordpressSimple:FaWordpressSimple,
    SiWebflow:SiWebflow,
    FaShopify:FaShopify
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMapping[iconName];
    return IconComponent ? <IconComponent size="50px" /> : null;
  };

  const getBtnIcon = (iconName) => {
    const IconComponent = iconMapping[iconName];
    return IconComponent ? <IconComponent size="20px" /> : null;
  };

  // TEXT COLOR FOR DAINAMIC
  const textColors = ['text-red-600', 'text-blue-600', 'text-green-600', 'text-purple-600', 'text-yellow-600'];
  const [textCurrentColorIndex, setTextCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextCurrentColorIndex((prevIndex) => (prevIndex + 1) % textColors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const textCurrentColor = textColors[textCurrentColorIndex];

    // BACKGROUND COLOR FOR DAINAMIC

  const colors  = ['bg-rose-500',    'bg-pink-500',    'bg-fuchsia-500',    'bg-purple-500',    'bg-violet-500',    'bg-indigo-500',    'bg-blue-500',    'bg-sky-500',    'bg-cyan-500',       'bg-emerald-500',       'bg-lime-500',    'bg-yellow-500',    'bg-amber-500',    'bg-orange-500', ];
  const colors2 = ['bg-rose-900/50', 'bg-pink-900/50', 'bg-fuchsia-900/50', 'bg-purple-900/50', 'bg-violet-900/50', 'bg-indigo-900/50', 'bg-blue-900/50', 'bg-sky-900/50', 'bg-cyan-900/50',    'bg-emerald-900/50',     'bg-Lime-900/50', 'bg-yellow-900/50', 'bg-amber-900/50', 'bg-orange-900/50',];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // BODER COLOR DAYANAMIC
  const borderColors = ['border-red-600', 'border-blue-600', 'border-green-600', 'border-purple-600', 'border-yellow-600'];
  const [borderCurrentColorIndex, setborderCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setborderCurrentColorIndex((prevIndex) => (prevIndex + 1) % borderColors.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const borderCurrentColor = borderColors[borderCurrentColorIndex];

  const currentColor = colors[currentColorIndex];
  const currentColor2 = colors2[currentColorIndex];

  const hoverAnimation = `hover:scale-110 transition duration-300`;
  const containerStyles = `backdrop-blur-xl rounded-md p-4 text-white text-center uppercase ${currentColor} ${currentColor2} lg:w-[400px] lg:h-[300px] ${hoverAnimation}`;
  const textStyles = `w-full flex justify-center items-center ${textCurrentColor}`;
  const btnContainerStyles = `w-[90%] flex justify-center items-center ml-5  py-3   mt-5 rounded  ${textCurrentColor} border-4 ${borderCurrentColor} ${hoverAnimation}`;

  return (
    <div>
      <div className={containerStyles}>
        <div className={textStyles}>{getIcon(ServiceIcon)}</div>
        <h2 className='text-2xl font-semibold'>{ServiceName}</h2>
        <p className='text-sm'>{ServiceDetals}</p>
        <div className={btnContainerStyles}>
          <a className=" flex justify-center items-center gap-3 " href={ServiceBtn}>
            {getBtnIcon(ServiceIcon)}{'More Details'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceComponents;
