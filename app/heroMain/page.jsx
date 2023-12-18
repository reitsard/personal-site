import React from 'react'
import '../globals.css'
import Image from 'next/image'

const HeroMain = () => {
  return (
    <div className='heroMain'>
        <div className="warn">This Site is currently NOT MOBILE RESPONSIVE</div>
        <div
            className="txtMain">
            CRAFTING<br />DIGITAL<br />SUCCESS<br /><span> TOGETHER</span>
        </div>
        <Image 
            className='bgBackground bgMain'
            src={'/bg.jpg'}
            width={768.5}
            height={689.5}
            alt='bg'
        />
        <Image 
            className='bgBackground fgMain'
            src={'/fg.png'}
            width={681.8}
            height={454.5}
            alt='fg'
        />
    </div>
  )
}

export default HeroMain