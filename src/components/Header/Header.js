import React from 'react'
import Link from 'next/link'
import { GoBeaker } from "react-icons/go";

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <Link href="/" passHref className='logo' > <GoBeaker /> </Link>
            <nav>
               <ul>
                <li> <Link href="/" passHref >Home</Link> </li>
                <li> <Link href="/animals" passHref >Animais</Link> </li>
                <li> <Link href="/about" passHref >Comidas</Link> </li>
               </ul>
               <div>
                <Link className='btn' href="/" passHref >Comprar</Link>
               </div>
            </nav>
        </div>
    </header>
  )
}

export default Header

