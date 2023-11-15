import React from 'react'
//JSON FILE
import SocialAccountsjson from './SocialAccounts.json'
// React Components
import SocialLinkAccounts from './SocialLinkAccounts'


function SocialLinkAccount() {
  return (
    <div>
      <div className="flex gap-2">
        {SocialAccountsjson.map((AccountLink, index)=>(
            <SocialLinkAccounts AccountLink={AccountLink} key={index} />
        ))}
      </div>
    </div>
  )
}

export default SocialLinkAccount