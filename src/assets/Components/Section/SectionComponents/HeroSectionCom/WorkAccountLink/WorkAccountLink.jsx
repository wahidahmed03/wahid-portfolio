import React from 'react'
// IMPORT JSON FILE
import WorkAccountsLinkJson from "./WorkAccountsLink.json"

// IMPORT REACT COMPONETS
import WorkAccountsLinks  from './WorkAccountsLinks'

function WorkAccountLink() {
  return (
    <div className=" flex gap-2 sm:m-5 md:mt-0">
        {WorkAccountsLinkJson.map((AccountLink, index)=>(
            <WorkAccountsLinks AccountLink={AccountLink}  key={index}/>
        ))}
    </div>
  )
}

export default WorkAccountLink