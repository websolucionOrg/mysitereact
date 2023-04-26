import React from 'react'
import Link from 'next/link'
import { FaGithub, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
        <p> &copy; 2023 Websolucion </p>
        <div className='icons' >
          <Link href="https://github.com"> <FaGithub /> </Link>
          <Link href="https://github.com"> <FaFacebookF /> </Link>
        </div>
    </footer>
  )
}

export default Footer