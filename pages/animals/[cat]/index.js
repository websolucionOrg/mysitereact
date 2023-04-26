import React from 'react'
import Link from 'next/link'
import { HeadHtml } from '@/src/components/elements/HeadH'
import Image from 'next/image'
import { GoEye } from "react-icons/go";
const TypeAnimals = ({data}) => {
  return (
   <>
   <HeadHtml titlePage="Animais 1" />
   <section className='animaisTypes mt'>
      <div className='container'>
    
      {data.map((ev)=>(
        
      <Link href={`/${ev.pet}`} className='card' > 
        <h2>{ev.titlePet}</h2>
          <Image src={ev.image} alt={ev.id} width={400} height={400} />
         <div className='contIcon' ><GoEye className='view' /></div> 
      </Link>

      ))}
    
      </div>
    </section>
    </>
  )
}

export default TypeAnimals

export async function getStaticPaths() {
  const { pets } = await import('/data/data.json');
  console.log(pets);
  const allPaths = pets.map((ev) => {
    return {
      params: {
        cat: ev.pet.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  
  const id = context?.params.cat;
  const { allPets} = await import('/data/data.json');

  const data = allPets.filter((ev) => ev.tyPet === id);

  return { props: { data, pageName: id } };
}