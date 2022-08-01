import Layout from "@/components/Layout";
import { URL_API } from "@/config/index";
import Image from "next/image";
import styles from "@/styles/[enlaceUrl].module.css";
import Link from "next/link";

const enlaceUrl = ({ selectedDog }) => {
  return (
    <Layout title="Movie Detail">
      <div className={styles.caja}>
        <div className="row">
          <div className="col-sm-4 offset-8">
          <Link href={`/movies/edit/${selectedDog.enlaceUrl}`}>
              <a className="btn btn-secondary btn-sm">
                <i className="bi bi-pencil-fill" />Go back
              </a>
            </Link>
            &nbsp;
            <Link href={`/movies/delete/${selectedDog.enlaceUrl}`}>
              <a className="btn btn-danger btn-sm">
                <i className="bi bi-eraser-fill" />Go back
              </a>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">{selectedDog.name} </h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 offset-3">
                <Image
                  className="img-responsive"
                  src={
                    selectedDog.image
                      ? selectedDog.image
                      : "/images/defaults.jpg"
                  }
                  width={255}
                  height={350}
                />
              </div>
            </div>
            <p className="card-text">
              <strong>Name:</strong> {selectedDog.name}
            </p>
            <p className="card-text">
              <strong>Descripcion:</strong> {selectedDog.desc}
            </p>
            <p className="card-text">
              <strong>Age:</strong>{" "}
              <span className="badge bg-warning text-dark">
                {" "}
                {selectedDog.age}
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
  const res = await fetch(`${URL_API}/api/movies`);
  const dogs = await res.json();

  const paths = dogs.map((dog) => ({ params: { enlaceUrl: dog.enlaceUrl } }));

  return {
    paths,
    fallback: false,
  };
};

//getStaticProps
export const getStaticProps = async ({ params: { enlaceUrl } }) => {
  const res = await fetch(`${URL_API}/api/movies/${enlaceUrl}`);
  const doggoData = await res.json();
  return {
    props: { selectedDog: doggoData },
  };
};

/* //getServerSideProps
export const getServerSideProps = async ({ query: { enlaceUrl } }) => {
  const res = await fetch(`${URL_API}/api/movies/${enlaceUrl}`);
  const doggoData = await res.json();
  return {
    props: { doggoData },
  };
}; */
