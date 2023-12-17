import React from 'react'
import '../globals.css'
import Banner from '../horizontalBanner/page'
import SocialLinks from '../socialLinks/page'

const About = () => {
  return (
    <>
    <div className="aboutContainer">
      <div className="aboutHeader">
          <div className="gradientGlow"></div>
      <div>
          <p className="jobTitle">Frontend Developer</p>
          <p className="specialization">React JS / Next JS</p>
      </div>
    </div>

      <div className="aboutSections">
        <p className="aboutHeading">Objective</p>
        <p className="aboutCopy">
            To leverage a unique journey from studying to become a teacher to mastering web development skills, and subsequently utilizing these skills for freelancing. My goal is to blend my passion for education with my proficiency in web development to empower others through teaching in the future.
        </p>
      </div>
      <div className="aboutSections">
        <p className="aboutHeading">Background</p>
        <p className="aboutCopy">
          My academic journey began with a sincere aspiration to become a teacher. I was drawn to the idea of shaping young minds and contributing positively to the education sector. I pursued my studies with dedication and enthusiasm, majoring in education and participating in various teaching programs.
          <br /><br />However, along this journey, I discovered another compelling passion &lsquo; web development. The vast and dynamic world of coding fascinated me, and I found myself increasingly drawn to the idea of mastering these skills. Recognizing the transformative power of technology and its role in shaping the future, I decided to explore the realm of web development.
        </p>
      </div>
      <div className="aboutSections">
        <p className="aboutHeading">Transition</p>
        <p className="aboutCopy">
          Driven by a desire to integrate my teaching aspirations with technological expertise, I made a pivotal decision to delve into web development. I embarked on a rigorous self-learning journey, devouring programming languages, frameworks, and design principles. Through online courses, tutorials, and real-world projects, I honed my skills, turning the intricate lines of code into functional and visually appealing websites.
          <br /><br />During this process, I realized the potential to not only create a niche for myself in the web development industry but also to enrich my future teaching endeavors. The idea of not just imparting traditional knowledge but also empowering others with relevant, practical skills became a driving force.
        </p>
      </div>
      <div className="aboutSections">
        <p className="aboutHeading">Future Aspirations</p>
        <p className="aboutCopy">
          As I continue freelancing, I am laying the foundation for my ultimate goal -- combining my teaching background with web development expertise. I envision a future where I can educate aspiring individuals, not only in conventional subjects but also equip them with the practical skills needed in todays digital landscape.
        </p>
      </div>
      <div className="aboutSections">
        <p className="aboutHeading">Conclusion</p>
        <p className="aboutCopy">
          My journey from aspiring teacher to a skilled web developer encapsulates a dynamic fusion of passion and adaptability. Through relentless self-learning and hands-on experience, I have embraced the transformative power of technology. My unique trajectory positions me as an individual with the ability to bridge the gap between traditional education and the demands of the modern digital era.
        </p>
      </div>
      <div className="aboutSections">
        <p className="aboutHeading">Skills Summary</p>
        <div className="skillsContainer">
          <div className="wrapper">
            <p className="aboutHeading">Languages</p>
            <div className="ssContainer">
              <p className="skLang">HTML and CSS</p>
              <p className="skLang">JavaScript</p>
              <p className="skLang">Python</p>
            </div>
          </div>
          <div className="wrapper">
            <p className="aboutHeading">Technologies</p>
            <div className="ssContainer">
              <p className="skLang">React JS</p>
              <p className="skLang">Next JS</p>
              <p className="skLang">Node JS</p>
              <p className="skLang">Express JS</p>
              <p className="skLang">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
    <SocialLinks />
    </>
  )
}

export default About
