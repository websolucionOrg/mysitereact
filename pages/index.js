import { HeadHtml } from '@/src/components/elements/HeadH'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <HeadHtml titlePage="Home-Welcome" />
       <section className='starthomePage'>
        <div className='content'>
          <h1>Pesquisas Avançadas</h1>
          <p> O melhor laboratorio de medicina molecular do mundo </p>
          <Link href="/" passHref className='btn' >Saber Mais </Link>
        </div>
            
       </section>
    </>
  )
}
