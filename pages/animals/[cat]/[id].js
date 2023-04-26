import React from 'react'
import Image from 'next/image';
export const Animal = ({data}) => {
  return (
    <div>
        <Image src={data.image} width={400} height={400} alt='im' />
        <p> {data.desc} </p>
    </div>
  )
}
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