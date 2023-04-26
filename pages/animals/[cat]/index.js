import React from 'react'
import Link from 'next/link'
import { HeadHtml } from '@/src/components/elements/HeadH'

const TypeAnimals = ({data}) => {
  return (
   
    <>
    <HeadHtml titlePage="Animais 1" />
    {data.map((ev)=>(
    <Link href={`/${ev.pet}`} > {ev.pet} </Link>
    ))}
    
    </>
  )
}

export default TypeAnimals

export async function getStaticPaths() {
  const { pets } = await import('/data/data.json');
  console.log(pets);
  const allPets = pets.map((ev) => {
    return {
      params: {
        cat: ev.pet.toString(),
      },
    };
  });
  console.log(allPets);
  return {
    paths: allPets,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allPets} = await import('/data/data.json');

  const data = allPets.filter((ev) => ev.pet === id);

  return { props: { data, pageName: id } };
}