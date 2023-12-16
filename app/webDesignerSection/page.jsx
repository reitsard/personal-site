import React from 'react'
import '../globals.css'
import Image from 'next/image'
import Banner from '../horizontalBanner/page'

const ParallaxSection = (props) => {
  return (
    <div className="parallaxEffect">
        <div className='webDesignerContainer'>
            <Image 
                className='bgBackground'
                id='bgBackground'
                src={props.bgSrc}
                width={props.bgW}
                height={props.bgH}
                alt={props.bgAlt}
            />
            <div className={props.positionCopy}>
                <div className="topCopy">
                    <div className="topElement" id={props.topElem}>{props.jobTitle}</div>
                    <div className="mainService heroSlogan" id={props.mainServ}>{props.jobDes}</div>
                </div>
            </div>
        </div>
        <div className="bannerContainer">
            <Image 
                className='imgBanner'
                src={props.bannerSrc}
                width={props.bannerW}
                height={props.bannerH}
                alt={props.bannerAlt}
            />
        </div>
    </div>
  )
}

export default ParallaxSection