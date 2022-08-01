import Dog from "@/components/Dog";
import Layout from "@/components/Layout";
import { URL_API } from "@/config/index";
import Link from "next/link";
import { useRouter } from "next/router";

const search = ({ foundDogs }) => {
  const router = useRouter();
  
  return (
    <Layout title="Searching">
      <h1 className="text-center mt-3">Searching: {router.query.text}</h1>
      <Link href="/movies">
        <a className="btn btn-secondary">Go back</a>
      </Link>
      {foundDogs.length === 0 && <h3>There is no Dogs</h3>}
      {foundDogs.map((dog) => (
        <Dog key={dog.id} doggo={dog.attributes}></Dog>
      ))} 
    </Layout>
  );
};

export default search;

//getServerSideProps:
export const getServerSideProps = async ({ query: { text } }) => {
  const uri = `${URL_API}/api/dogs?filters[name][$contains]=${text}&populate=*`;
  const res = await fetch(uri);
  const doggerinos = await res.json();
  return {
    props: { foundDogs: doggerinos.data },
  };
};
