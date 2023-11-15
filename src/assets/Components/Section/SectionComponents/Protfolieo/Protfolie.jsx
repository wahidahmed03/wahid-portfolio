import React, { useEffect, useState } from 'react'

import pic from './Projects.png'

import ProtfolieData from './protfolie.json'




function Protfolie() {

    const [nextItem, setnextitem] =useState(6)
    const [protfolie, srtprotfolie] = useState(ProtfolieData)

    const [selectab , setSelectab] = useState('all')

    const handleLoadMore = () =>{
        setnextitem(pre => pre + 6)
    }

    useEffect(()=>{
        if (selectab === "all") {
            srtprotfolie(ProtfolieData);
        }
        else{
            const filterData = ProtfolieData.filter(item => item.catagory === selectab);
            srtprotfolie(filterData);
        }


    },[selectab])

    const bynstyle = 'px-3 py-1 border-2 border-solid rounded mx-[4px] border-blue-700'
  return (
    <div>
        <div className='w-full'>
          <div className="px-[70px]  flex justify-between h-16 items-center mb-6 text-[12px] mt-3 lg:mt-8   ">
            <div className="">
                        <h3 className='  lg:text-xl text-sm font-bold'>SEE MY  PROTFOLIE</h3>
            </div>
            <div className=" w-[60%]flex">
                <button onClick={() => setSelectab("all")} className={`${bynstyle}`}>ALL</button>
                <button onClick={() => setSelectab("webflow")} className={`${bynstyle}`} >WORDPRESS</button>
                <button onClick={() => setSelectab("webdesign")} className={`${bynstyle}`} >WEBFLOW</button>
                <button onClick={() => setSelectab("html")} className={`${bynstyle}`} >SHOPIFY</button>
                <button onClick={() => setSelectab("wordpress")} className={`${bynstyle}`} >HTML</button>
                <button onClick={()=>setSelectab('') } className={`${bynstyle}`} >TAILWIND</button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
            <div className=" w-[100%] ">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 ">
               {protfolie.slice(0, nextItem).map((protfolie, index)=>(
                 <div className=" group relative text-white" key={index}>
                    <div className=" rounded w-[350px] h-[250px] bg-black ">
                        <img src={protfolie.imgurl} className='w-full h-full rounded bg-cover' alt="" />
                    </div>
                    <div className="w-[350px] h-[250px] absolute top-0 bg-[#0969d675] transition duration-300  hidden group-hover:block ">
                     <div className="flex justify-center items-center flex-col h-[250px]">
                       <h4 className='text-xl text-white font-semibold mb-2 uppercase'>{protfolie.profiletitle}</h4>
                       <button className={`${bynstyle} bg-blue-600`} >See Detels</button>
                     </div>
                    </div>
                  </div>
               ))}
             </div>
             <div className="w-full h-[100px] flex justify-center items-center">
                {nextItem < protfolie.length && ProtfolieData.length > 6 && (
                                    <button onClick={handleLoadMore} className={`${bynstyle}`}>Load More</button>
                )}
             </div>
            </div>
        </div>
    </div>
  )
}

export default Protfolie