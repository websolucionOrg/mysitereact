import React from 'react'
import { HeadHtml } from '@/src/components/elements/HeadH';
import { AnimalsPage } from '@/src/components/animals/Animals';
const Animals = ({data}) => {
  return (
    <>
    <HeadHtml titlePage="Animais" />
        <AnimalsPage data={data} />
    </>
  )
}

export default Animals;

export async function getServerSideProps() {
    const { pets } = await import('/data/data.json');
    return {
      props: {
        data: pets,
      },
    };
  }