import Dog from "@/components/Dog";
import Layout from "@/components/Layout";
import { URL_API } from "@/config/index";

export default function Home({ doggerinos }) {
  return (
    <Layout>
      <h1 className="text-center mt-4">Cheems Movies</h1>
      {doggerinos.data.map((dog) => (
        <Dog key={dog.id} doggo={dog.attributes}></Dog>
      ))}
    </Layout>
  );
}

/*getStaticProps:  contenido estatico, no se actualiza*/
export const getStaticProps = async () => {
  const res = await fetch(
    `${URL_API}/api/dogs?` +
      `sort=createdAt:DESC` +
      `&populate=*`
  );
  const doggerinos = await res.json();
  console.log
  return {
    props: { doggerinos },
    revalidate: 2,
  };
};

/* //getServerSideProps:  
export const getServerSideProps = async () => {
  const res = await fetch(`${URL_API}/api/dogs`);
  const doggerinos = await res.json();
  return {
    props: {doggerinos},
  };
};
 */
