
import React from 'react';
import Link from 'next/link'
import { GiCat, GiSittingDog, GiTropicalFish,GiRabbit,GiSeatedMouse,GiHummingbird } from "react-icons/gi";
const typNav = () => {


  return (
    <>

      <div className='typeNav mx-w'>
          <Link href="/animals/dogs" passHref ><GiSittingDog /> Cães  </Link>
          <Link href="/animals/cats" passHref ><GiCat /> Gatos </Link>
          <Link href="/animals/fixes" passHref ><GiTropicalFish /> Peixes </Link>
          <Link href="/animals/coelhos" passHref ><GiRabbit /> Coelhos </Link>
          <Link href="/animals/mauses" passHref ><GiSeatedMouse /> Ratos </Link>
          <Link href="/animals/passaros" passHref ><GiHummingbird /> Aves </Link>
      </div>

    </>
  );
};

export default typNav;