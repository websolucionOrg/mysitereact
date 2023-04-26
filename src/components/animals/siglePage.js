
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { HeadHtml } from '../elements/HeadH';
import { GiCat, GiSittingDog, GiTropicalFish,GiRabbit,GiSeatedMouse,GiHummingbird } from "react-icons/gi";
const SingleAnimal = ({ data }) => {


  return (
    <>
    <HeadHtml  titlePage={`${data.titlePet}`} />
    <section className='singlePage mt' >
      <div className='typeNav mx-w'>
          <Link href="/animals/dogs" passHref ><GiSittingDog /> Cães  </Link>
          <Link href="/animals/cats" passHref ><GiCat /> Gatos </Link>
          <Link href="/animals/fixes" passHref ><GiTropicalFish /> Peixes </Link>
          <Link href="/animals/coelhos" passHref ><GiRabbit /> Coelhos </Link>
          <Link href="/animals/mauses" passHref ><GiSeatedMouse /> Ratos </Link>
          <Link href="/animals/passaros" passHref ><GiHummingbird /> Aves </Link>
      </div>
      <div className='container'>
          <Image className='img' src={data.image} width={400} height={400} alt='im' />
          <div className='desc'>
            <h2> {data.titlePet} </h2>
            <p> {data.desc} </p>
          </div>
          
      </div>
   
    </section>
    </>
  );
};

export default SingleAnimal;