"use client"

import React, {useState} from 'react'
import Image from 'next/image'

const HeroSection = () => {
    const [isMouseScroll, setMouseScroll] = useState(false);
    window.addEventListener('scroll', () => {
        let mousePosition = window.scrollY
        if (mousePosition > 0.01) {
            setMouseScroll(true)
        }
        else {
            setMouseScroll(false)
        }
    })
 
  return (
    <div className='container'>
    <div className='heroContainer'>
        <div className={isMouseScroll ? "macbook macbookActive" : "macbook"}>
            <Image
                className='macImage'
                src={'/macbook.png'}
                width={900}
                height={900}
                alt='macbook'
            />
            <div className="imageFlex">
                <Image 
                    className={isMouseScroll ? "flexImg designActive" : "flexImg"}
                    id='design'
                    src={'/design.png'}
                    width={622.5}
                    height={350}
                    alt='design'
                />
                <Image 
                    className={isMouseScroll ? "flexImg codeActive" : "flexImg"}
                    id='code'
                    src={'/code.png'}
                    width={622.5}
                    height={350}
                    alt='code'
                />

            </div>
        </div>
        <div className={isMouseScroll ? "figma figmaActive" : "figma"}>
            <p className="figmaTxt" id='figmaTxt'>We design it on Figma</p>
            <Image className='heroIco'
                    id='figmaImg'
                    src={'/figma.png'}
                    width={80}
                    height={80}
                    alt='figma'/>
        </div>
        <div className={isMouseScroll ? "nextjs nextjsActive" : "nextjs"}>
            <Image className='heroIco'
                    id='nextjsImg'
                    src={'/nextjs.png'}
                    width={80}
                    height={80}
                    alt='nextjs'/>
            <p className="figmaTxt" id='figmaTxt'>We code it using Next JS</p>
        </div>
        <div className={isMouseScroll ? "heroSlogan heroSloganActive" : "heroSlogan"}>CRAFTING<br />DIGITAL<br />SUCCESS<br /><span>TOGETHER</span></div>
    </div>
    
    </div>
  )
}

export default HeroSection