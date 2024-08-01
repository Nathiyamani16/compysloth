import { } from 'react'
import "../contact/contact.scss"

const Contact = () => {
  return (
    <div className='conatct-con'>
      <div className='title-con'>
        <h2>Join our newsletter and get 20% off</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          <br />unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          <br />tempore?</p>
      </div>
      <form className='con-form'>
        <input type='email' required placeholder='Enter Email' />
        <button className='submit-btn'>Subscribe</button>
      </form>

    </div>
  )
}

export default Contact
