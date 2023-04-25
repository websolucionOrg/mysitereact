import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const HomePage = ({data}) => {
  return (
    <>   
       <section className='starthomePage'>
          <div className='content'>
            <h1>O melhor para os nossos Pets</h1>
            <p> O melhor laboratorio de medicina molecular do mundo </p>
            <Link href="/" passHref className='btn' >Saber Mais </Link>
          </div>
       </section>

       <section className='animaisTypes'>
          <div className='container'>
            {data.map((ev)=>(
              <Link href={`/${ev.pet}`} passHref className='box' >
                    <Image src={ev.img} width={500} alt='Sambo' height={400} />
                    <h2> {ev.title} </h2>
              </Link>                
              ))}
          </div>
       </section>
    </>
  )
}