import React from 'react'
import AnimalIndex from '@/src/components/animals/AnimalIndex'


const TypeAnimals = ({data}) => {
  return (
   <>
    <AnimalIndex data={data} />
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