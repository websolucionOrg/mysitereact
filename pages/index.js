import { HeadHtml } from '@/src/components/elements/Head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadHtml titlePage={"Home"} />
      <main className={`${styles.main} ${inter.className}`}>
       
      </main>
    </>
  )
}
