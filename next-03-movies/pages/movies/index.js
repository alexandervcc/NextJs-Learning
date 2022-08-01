import Dog from "@/components/Dog";
import Layout from "@/components/Layout";
import { URL_API } from "@/config/index";
import Link from "next/link";

const DOGS_PER_PAGE = 2;

const index = ({ dogsList, cantDogs, page }) => {
  const lastPage = Math.ceil(cantDogs.meta.pagination.total / DOGS_PER_PAGE);

  return (
    <Layout title="Movies List">
      <h1 className="text-center mt-3">Doggerinos List</h1>
      {dogsList.length === 0 && <h3>No dogs found</h3>}
      {dogsList.data.map((dog) => (
        <Dog key={dog.attributes.id} doggo={dog.attributes} />
      ))}
      <div className="row mb-4">
        <div className="col-sm-6 offset-3 text-center">
          {page > 1 && (
            <Link className="mb-4" href={`/movies?page=${page - 1}`}>
              <a className="btn btn-dark">
                <i className="bi bi-arrow-left-circle-fill" />
                {" Previous"}
              </a>
            </Link>
          )}
          &nbsp;
          {page < lastPage && (
            <Link className="mb-4" href={`/movies?page=${page + 1}`}>
              <a className="btn btn-dark">
                <i className="bi bi-arrow-right-circle-fill" />
                {" Next"}
              </a>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default index;

//getServerSideProps
export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const inicio = +page === 1 ? 0 : (+page - 1) * DOGS_PER_PAGE;

  const totalDogs = await fetch(`${URL_API}/api/dogs`);
  const totalCant = await totalDogs.json();

  const URI =
    `${URL_API}/api/dogs?` +
    `sort=createdAt:DESC` +
    `&pagination[start]=${inicio}` +
    `&pagination[limit]=${DOGS_PER_PAGE}` +
    `&populate=*`;
  const res = await fetch(URI);
  const doggos = await res.json();

  return {
    props: { dogsList: doggos, page: +page, cantDogs: totalCant },
  };
};

/* //getStaticProps:  contenido estatico, no se actualiza
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
 */
