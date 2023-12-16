import React from 'react'
import '../globals.css'
import Image from 'next/image'
import Banner from '../horizontalBanner/page'

const WebDesigner = () => {
  return (
    <div className="container">
    <div className="parallaxEffect">
        <div className='webDesignerContainer'>
            <Image 
                className='bgBackground'
                id='bgBackground'
                src={'/pexels-andrew-neel-8960464.jpg'}
                width={5748}
                height={3832}
                alt='pexels-andrew-neel-8960464'
            />
            <div className="foregroundElements">
                <div className="topCopy">
                    <div className="topElement">UI/UX Designer</div>
                    <div className="mainService heroSlogan">WEB DESIGN</div>
                </div>
            </div>
        </div>
        <div className="bannerContainer">
            <Image 
                className='imgBanner'
                src={"/banner.png"}
                width={859}
                height={220}
                alt='world balance high fidelity wireframe'
            />
        </div>
    </div>
    </div>
  )
}

export default WebDesigner