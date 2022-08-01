import styles from "@/styles/Dog.module.css";
import Image from "next/image";
import Link from "next/link";

const Dog = ({ doggo }) => {
  return (
    <div className={styles.box}>
      <div className="row my-5 p-3">
        <div className="col-sm-3">
          <Image
            src={
              doggo.image.data
                ? doggo.image.data[0].attributes.formats.thumbnail.url
                : "/images/defaults.jpg"
            }
            width={168}
            height={250}
          />
        </div>
        <div className="col-sm-3 pt-5">
          <h3>{doggo.name} </h3>
        </div>
        <div className="col-sm-3 pt-5">
          <strong>Age: </strong>
          {doggo.age}
        </div>
        <div className="col-sm-3 pt-5">
          <Link href={`/movies/${doggo.enlaceUrl}`}>
            <a className="btn btn-success">
              More info... 
              <i className="bi bi-arrow-right-square-fill"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dog;
