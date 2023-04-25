import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const AnimalsPage = ({data}) => {
  return (
    <>
       <section className='animaisTypes mt'>
          <div className='container'>
            {data.map((ev)=>(
              <Link href={`/animals/${ev.pet}`} passHref className='box' >
                    <Image src={ev.img} width={500} alt='Sambo' height={400} />
                    <h2> {ev.title} </h2>
              </Link>                
              ))}
          </div>
       </section>
    </>
  )
}
