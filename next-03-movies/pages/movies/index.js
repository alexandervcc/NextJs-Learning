import Dog from "@/components/Dog";
import Layout from "@/components/Layout";
import { URL_API } from "@/config/index";

const index = ({ dogsList }) => {
  return (
    <Layout title="Movies List">
      <h1 className="text-center mt-3">Doggerinos List</h1>
      {dogsList.length === 0 && <h3>No dogs found</h3>}
      {dogsList.data.map((dog) => (
        <Dog key={dog.attributes.id} doggo={dog.attributes} />
      ))}
    </Layout>
  );
};

export default index;

/*getStaticProps:  contenido estatico, no se actualiza*/
export const getStaticProps = async () => {
  const res = await fetch(
    `${URL_API}/api/dogs?` + `sort=createdAt:DESC` + `&populate=*`
  );
  const doggerinos = await res.json();
  return {
    props: { dogsList: doggerinos },
    revalidate: 2,
  };
};
