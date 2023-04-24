import React from 'react'
import Link from 'next/link'
import { IconTree } from "react-icons";

const Header = () => {
  return (
    <header>
        <div className='.container'>
            <Link href="/" passHref >lOGO</Link>
            <nav>
               <ul>
                <li> <Link href="/" passHref >Home</Link> </li>
                <li> <Link href="/" passHref >Sobre</Link> </li>
               </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header

