import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GoEye } from "react-icons/go";
import { GiCat, GiSittingDog, GiTropicalFish,GiRabbit,GiSeatedMouse,GiHummingbird } from "react-icons/gi";
import { HeadHtml } from '../elements/HeadH';
const AnimalIndex = ({data}) => {
  return (
    <>
    <HeadHtml titlePage="Animais" />
    <section className='animaisTypes mt'>
      <div className='typeNav'>
          <Link href="/animals/dogs" passHref ><GiSittingDog /> Cães  </Link>
          <Link href="/animals/cats" passHref ><GiCat /> Gatos </Link>
          <Link href="/animals/fixes" passHref ><GiTropicalFish /> Peixes </Link>
          <Link href="/animals/coelhos" passHref ><GiRabbit /> Coelhos </Link>
          <Link href="/animals/mauses" passHref ><GiSeatedMouse /> Ratos </Link>
          <Link href="/animals/passaros" passHref ><GiHummingbird /> Aves </Link>
      </div>
       <div className='container'>
     
       {data.map((ev)=>(
         
       <Link href={`/animals/${ev.tyPet}/${ev.id}`} className='card' > 
         <h2>{ev.titlePet}</h2>
           <Image src={ev.image} alt={ev.id} width={400} height={400} />
          <div className='contIcon' >
           <div className='view'>
             <GoEye className='ege' />
             <span>Visualizar</span>
           </div>
           
           </div> 
       </Link>
 
       ))}
     
       </div>
     </section>
     </>
  )
}

export default AnimalIndex