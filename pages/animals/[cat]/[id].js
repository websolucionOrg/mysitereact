import React from 'react'
import { HeadHtml } from '@/src/components/elements/HeadH'
import SingleAnimal from '@/src/components/animals/siglePage'
import Link from 'next/link'
const Animal = ({data}) => {
  return (
     <>
     
       <SingleAnimal data={data} />
     </>
   )   
}

export default Animal
export async function getStaticPaths() {
    const pets = await import('/data/data.json');
    const allPets = pets.allPets;
  
    const allPaths = allPets.map((path) => {
      return {
        params: {
          cat: path.tyPet,
          id: path.id,
        },
      };
    });
  
    return {
      paths: allPaths,
      fallback: false,
    };
  }
  
  export async function getStaticProps(context) {
    console.log(context);
    const id = context.params.id;
    const { allPets } = await import('/data/data.json');
    const eventData = allPets.find((ev) => id === ev.id);
  
    return {
      props: { data: eventData },
    };
  }