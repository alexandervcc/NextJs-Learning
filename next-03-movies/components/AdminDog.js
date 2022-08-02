import Link from "next/link";
import styles from "@/styles/AdminDog.module.css";

export const AdminDog = ({ dog, handleDelete }) => {
  return (
    <div className="card bg-dark text-white my-2">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-10">
            <Link href={`/movies/${dog.enlaceUrl}`}>
              <a>{dog.name}</a>
            </Link>
          </div>
          <div className="col-sm-1">
            <Link href={`/movies/edit/${dog.id}`}>
              <a className="btn btn-primary btn-sm">
                <span>
                  <i className="bi bi-pencil-fill"></i>
                </span>
              </a>
            </Link>
          </div>
          <div className="col-sm-1">
            <a
              href="#"
              className="btn btn-danger btn-sm"
              onClick={() => {
                handleDelete(dog.id);
              }}
            >
              <span>
                <i className="bi bi-eraser-fill"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
