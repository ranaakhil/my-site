import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import  {Link} from 'react-scroll'
function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <Link to="header" spy={true} smooth={true}  duration={100} onClick={() => setActiveNav('#header')}><AiOutlineHome /></Link>
      <Link to="about" spy={true} smooth={true} duration={100} onClick={() => setActiveNav('#about')}><AiOutlineUser /></Link>
      <Link to="experience" spy={true} smooth={true} duration={100}  onClick={() => setActiveNav('#experience')}><BiBook /></Link>
      <Link to="services" spy={true} smooth={true}  duration={100} onClick={() => setActiveNav('#services')}><RiServiceLine /></Link>
      <Link to="contact" spy={true} smooth={true}  duration={100} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></Link>
    </nav>
  )
}

export default Nav