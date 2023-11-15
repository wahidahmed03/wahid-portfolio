import React from 'react'
import { Outlet, Link } from "react-router-dom";


function WorkAccountsLinks(props) {

    const {platfrom, link, icon} = props.AccountLink
  return (
    <div className=" w-8 h-8  lg:h-10 lg:w-10 rounded-md hover:scale-125 transform transition-transform duration-300">
      <Link to={`/services`}>
            <img src={icon} alt="platfrom"  className='rounded shadow-md'/>
      </Link>
    </div>
  )
}

export default WorkAccountsLinks