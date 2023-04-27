import React from 'react'
import Link from 'next/link'
import { GiSittingDog } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { GrHome} from 'react-icons/gr';
const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <Link href="/" passHref className='logo' > <GiSittingDog /> </Link>
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
            <div className='buttonsMobile'>
             <Link href="/" passHref > <GrHome /> </Link>
            <FaBars className='btnbars' />
            </div>
        </div>
    </header>
  )
}

export default Header

