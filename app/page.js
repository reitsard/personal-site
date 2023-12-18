import Image from 'next/image'
import './globals.css'
import HeroSection from './heroSection/page'
import ParallaxSection from './webDesignerSection/page'
import Banner from './horizontalBanner/page'
import Socials from './Socials/page'
import SocialLinks from './socialLinks/page'
import HeroMain from './heroMain/page'

export default function Home() {
  return (
    <main>
      <HeroMain />
      <SocialLinks />
      <HeroSection />
      <ParallaxSection
        bgSrc = "/pexels-andrew-neel-8960464.jpg"
        bgW = "5748"
        bgH = "3832"
        bgAlt = "pexels-andrew-neel-8960464"
        positionCopy = "foregroundElements"
        jobTitle = "UI/UX Designer"
        jobDes = "Web Design"
        bannerSrc = "/banner.png"
        bannerW = "859"
        bannerH = "220"
        bannerAlt = "banner"
      />
      <Banner />
      <ParallaxSection
        bgSrc = "/pexels-olia-danilevich-4974915.jpg"
        bgW = "6000"
        bgH = "4000"
        bgAlt = "pexels-olia-danilevich-4974915"
        positionCopy = "foregroundElements foregroundElementsLeftTop"
        jobTitle = "Frontend Developer"
        jobDes = "Web Development"
        topElem = "topElementToWhite"
        mainServ = "mainServ"
        bannerSrc = "/programming.png"
        bannerW = "1366"
        bannerH = "768"
        bannerAlt = "banner"
      />
      <Banner />
      <SocialLinks />
    </main>
  )
}
