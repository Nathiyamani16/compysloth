import {} from 'react'
import "../About/about.scss"
import Section from '../section/section'

const About = () => {

  return (
   <>
   <Section/>
   <div className='about-container'>
    <div className='about-img'>
   <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
              alt="hero-section-photo"
              className="about-img-style"
            />
   </div>
   <div>
    <h1>OUR STORY</h1>
    <p>

    </p>
   </div>
   </div>
   </>
  )
}

export default About