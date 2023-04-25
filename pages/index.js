import { HeadHtml } from '@/src/components/elements/HeadH'
import { HomePage } from '@/src/components/Home/Home';
export default function Home({data}) {
  return (
    <>
      <HeadHtml titlePage="Home-Welcome" />
      <HomePage data={data} />
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
