import React from 'react'
import '../globals.css'
import Image from 'next/image'
import SocialLinks from '../socialLinks/page'

const Socials = () => {
  return (
    <div className="container">
    <div className='socialsContainer'>
        <div className="socialAccounts">
            <div className="socialHeading">
                GET<br />IN<br />TOUCH
            </div>
        </div>
        <Image 
            className='imageRight'
            src={'/pexels-anna-nekrashevich-7552568.jpg'}
            width={983.16}
            height={785.4}
            alt='photo by Anna Nekrashevich'
        />
    </div>
    </div>
  )
}

export default Socials