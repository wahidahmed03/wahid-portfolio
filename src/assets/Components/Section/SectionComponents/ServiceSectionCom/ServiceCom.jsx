import React from 'react';
import ServiceFile from './ServiceFile.json';
import ServiceComponents from './ServiceComponents';

function ServiceCom() {
  return (
    <div>
        <div className="w-full h-[100px] text-center text-white">
          <h1  className='text-5xl font-bold' >WAHT I DO</h1>
          <p>WE WORK WITH YOU NOT FPR YOU</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {ServiceFile.map((service, index) => (
          <ServiceComponents service={service} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ServiceCom;
