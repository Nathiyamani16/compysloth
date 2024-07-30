import {} from 'react'
import "./about.scss"
import FirstPage from '../section/firstpage'


const About = () => {

  return (
   <>
   <FirstPage pageName="about"/>
   <div className='about-container'>
    <div className='about-img'>
   <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
              alt="hero-section-photo"
              className="about-img-style"
            />
   </div>
   <div className='ourstory'>
    <h2>Our Story</h2>
    <div className='under'></div>
    <div className='para-about'>
    <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium 
    <br/>sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error 
    <br/>accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam 
    <br/>esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est 
    <br/>exercitationem molestiae delectus saepe odio eligendi modi porro eaque in 
    <br/>libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste 
    <br/>ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. 
    <br/>Ex, voluptate accusamus nesciunt totam vitae esse iste.
    </p>
   </div>
   </div>
   </div>
   </>
  )
}

export default About