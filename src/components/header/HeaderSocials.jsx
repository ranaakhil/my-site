import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/akhirana123/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ranaakhil" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/akhil_ranaofficial/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials