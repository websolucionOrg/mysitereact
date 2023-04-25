import { HeadHtml } from '@/src/components/elements/HeadH'
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
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
            <Link href="/dogs" passHref className='box' >
                  <Image src="/../public/dogs/dog-1.jpg" width={500} alt='Sambo' height={400} />
                  <h2>Os Caes</h2>
            </Link>

            <Link href="/dogs" passHref className='box' >
                  <Image src="/../public/dogs/dog-1.jpg" width={500} alt='Sambo' height={400} />
                  <h2>Os Caes</h2>
            </Link>

            <Link href="/dogs" passHref className='box' >
                  <Image src="/../public/dogs/dog-1.jpg" width={500} alt='Sambo' height={400} />
                  <h2>Os Caes</h2>
            </Link>
          </div>
       </section>
    </>
  )
}
