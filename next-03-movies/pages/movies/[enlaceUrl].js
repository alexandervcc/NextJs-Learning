import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import Layout from "@/components/Layout";
import { URL_API } from "@/config/index";
import Image from "next/image";
import styles from "@/styles/[enlaceUrl].module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const enlaceUrl = ({ selectedDog, props }) => {
  const router = useRouter();

  return (
    <Layout title="Movie Detail">
      <ToastContainer theme="colored" />
      <div className={styles.caja}>
        <div className="row">
          <div className="col-sm-4 ">
            <Link href={`/movies/edit/${selectedDog.id}`}>
              <a className="btn btn-secondary btn-sm">
                <i className="bi bi-pencil-fill" />
                Edit
              </a>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">{selectedDog.attributes.name} </h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 offset-3">
                <Image
                  src={
                    selectedDog.attributes.image.data
                      ? selectedDog.attributes.image.data[0].attributes.formats
                          .thumbnail.url
                      : "/images/defaults.jpg"
                  }
                  width={168}
                  height={250}
                />
              </div>
            </div>
            <p className="card-text">
              <strong>Name:</strong> {selectedDog.attributes.name}
            </p>
            <p className="card-text">
              <strong>Descripcion:</strong> {selectedDog.attributes.desc}
            </p>
            <p className="card-text">
              <strong>Age:</strong>{" "}
              <span className="badge bg-warning text-dark">
                {" "}
                {selectedDog.attributes.age}
              </span>
            </p>
          </div>
          <div className="card-footer"></div>
          <Link href="/">
            <a className="btn btn-primary">Go back</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default enlaceUrl;

//getStaticPaths y getStaticProps
export const getStaticPaths = async () => {
  const res = await fetch(`${URL_API}/api/dogs`);
  const dogs = await res.json();

  const paths = dogs.data.map((dog) => ({
    params: { enlaceUrl: dog.attributes.enlaceUrl },
  }));

  return {
    paths,
    fallback: false,
  };
};

//getStaticProps
export const getStaticProps = async ({ params: { enlaceUrl } }) => {
  const URI =
    `${URL_API}/api/dogs?filters[enlaceUrl]=${enlaceUrl}` + `&populate=*`;
  const res = await fetch(URI);
  const doggoData = await res.json();
  return {
    props: { selectedDog: doggoData.data[0] },
    revalidate: 2,
  };
};

/* //getServerSideProps
export const getServerSideProps = async ({ query: { enlaceUrl } }) => {
  const res = await fetch(`${URL_API}/api/dogs/${enlaceUrl}`);
  const doggoData = await res.json();
  return {
    props: { doggoData },
  };
}; */
