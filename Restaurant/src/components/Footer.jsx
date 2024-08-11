import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-img">
        <a href="https://www.facebook.com"><img src={facebook} alt="facebook" style={{width:"40px"}} /></a>
        <a href="https://www.instagram.com"><img src={instagram} alt="instagram" style={{width:"40px"}} /></a>
        <a href="https://www.linkedin.com"><img src={linkedin} alt="linkedin" style={{width:"40px"}} /></a>
        </div>
        <p>Copyright &copy; 2024.All rights reserved</p>
    </div>
  )
}

export default Footer