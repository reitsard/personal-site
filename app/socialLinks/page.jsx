"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import '../globals.css'
import Image from 'next/image'
import Link from 'next/link'

const SocialLinks = () => {
    const router = useRouter();
  return (
    <div className="container">
    <div className='socialLinksContainer'>
        <div className="linkedIn">
            <Image 
                className='imgIco'
                src={'/icons8-linkedin-48.png'}
                width={40}
                height={40}
                alt='linkedIn'
            />
            <Link href="https://www.linkedin.com/in/richard-alvarado-363a01236/" target='_blank'>
                <p className="linkTitle">LinkedIn</p>
            </Link>
        </div>
        <div className="indeed">
            <Image 
                className='imgIco'
                src={'/icons8-indeed-32.png'}
                width={40}
                height={40}
                alt='indeed'
            />
            <Link href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage&_ga=2.105767755.938994834.1702700221-99104042.1697357746" target='_blank'>
                <p className="linkTitle">Indeed</p>
            </Link>
        </div>
        <div className="onlinejobsph">
            <Image 
                className='imgIco'
                src={'/onlinejobs.ph.jpg'}
                width={40}
                height={40}
                alt='onlinejobsph'
            />
            <Link href="https://www.onlinejobs.ph/jobseekers/info/2454896" target='_blank'>
                <p className="linkTitle">Onlinejobs.ph</p>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default SocialLinks