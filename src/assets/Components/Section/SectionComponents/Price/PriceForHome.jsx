import React, { useEffect, useState } from 'react'
import procebar from './pricedetsls.json'


import PriceTable from './PriceTable'



function PriceForHome() {

  const [nextItem, setnextitem] =useState(3)
  const [ pricetable, setpricetable] = useState(procebar)

  const [selectab , setSelectab] = useState('all')

  const handleLoadMore = () =>{
      setnextitem(pre => pre + 3)
  }

  useEffect(()=>{
      if (selectab === "all") {
        setpricetable(procebar);
      }
      else{
          const filterData = procebar.filter(item => item.Catagory === selectab);
          setpricetable(filterData);
      }


  },[selectab])
  const bynstyle = 'px-3 py-1 border-2 border-solid rounded mx-[4px] border-blue-700'


  return (
    <div>
        <div>
          <div className="px-[70px] flex justify-between h-16 items-center mb-6 mt-10 lg:my-2 text-[12px]   ">
            <div className="">
                        <h3 className='  lg:text-xl text-sm font-bold'>SEE WEB SERVICE</h3>
            </div>
            <div className=" w-[60%]flex">
                <button onClick={() => setSelectab("all")} className={`${bynstyle}`}>ALL</button>
                <button onClick={() => setSelectab("webflow")} className={`${bynstyle}`} >Webflow</button>
                <button onClick={() => setSelectab("WordPress")} className={`${bynstyle}`} >WORDPRESS</button>
                <button onClick={() => setSelectab("shopify")} className={`${bynstyle}`} >SHOPIFY</button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ">
            <div className=" w-[100%] ">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 ">
                {pricetable.slice(0, nextItem).map((pricetable, index)=>(
                  <PriceTable pricetable={pricetable} key={index} />
                 ))}
             </div>
             <div className="w-full h-[100px] flex justify-center items-center">
                {nextItem < pricetable.length && procebar.length > 3 && (
                   <button onClick={handleLoadMore} className={`${bynstyle}`}>Load More</button>
                )}
             </div>
            </div>
        </div>
    </div>
  )
}

export default PriceForHome