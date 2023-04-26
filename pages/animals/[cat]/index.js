import React from 'react'
import Link from 'next/link'
import { HeadHtml } from '@/src/components/elements/HeadH'
import Image from 'next/image'
const TypeAnimals = ({data}) => {
  return (
   
    <div>
    <HeadHtml titlePage="Animais 1" />
    {data.map((ev)=>(
    <Link href={`/${ev.pet}`} > 
      <h2>{ev.desc}</h2>
        <Image src={ev.image} alt={ev.id} width={400} height={400} />
    </Link>
    ))}
    
    </div>
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
  console.log(allPaths);
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