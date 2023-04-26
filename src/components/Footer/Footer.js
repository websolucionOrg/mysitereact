import React from 'react'
import Link from 'next/link'
import { FaGithub, FaFacebookF,FaGitlab, FaPinterest, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Websolucion &copy; 2023  </p>
        <div className='icons' >
          <Link href="https://github.com" > <FaGithub /> </Link>
          <Link href="https://github.com"> <FaFacebookF /> </Link>
          <Link href="https://github.com"> <FaGitlab /> </Link>
          <Link href="https://github.com"> <FaPinterest /> </Link>
          <Link href="https://github.com"> <FaLinkedin /> </Link>


        </div>
    </footer>
  )
}

export default Footer