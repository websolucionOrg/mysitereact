import { HeadHtml } from '@/src/components/elements/HeadH'
import Link from 'next/link'
import Image from 'next/image'
export default function Home({data}) {
  return (
    <>
      <HeadHtml titlePage="Home-Welcome" />
       <section className='starthomePage'>
          <div className='content'>
            <h1>O melhor para os nossos Pets</h1>
            <p> O melhor laboratorio de medicina molecular do mundo </p>
            <Link href="/" passHref className='btn' >Saber Mais </Link>
          </div>
       </section>

       <section className='animaisTypes'>
          <div className='container'>
            {data.map((ev)=>(
              <Link href={`/${ev.pet}`} passHref className='box' >
                    <Image src={ev.img} width={500} alt='Sambo' height={400} />
                    <h2> {ev.title} </h2>
              </Link>                
              ))}
          </div>
       </section>
    </>
  )
}

export async function getServerSideProps() {
  const { pets } = await import('/data/data.json');
  console.log(pets);
  return {
    props: {
      data: pets,
    },
  };
}
