import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { URL_API } from "@/config/index";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

const newMovie = ({}) => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    desc: "",
    age: "",
    date: "",
  });

  const handlePostNewDog = async (e) => {
    e.preventDefault();
    const emptyValues = Object.values(values).some((element) => element === "");

    if (emptyValues) {
      toast.error("Empty values, provide one.");
      return;
    }

    const reponse = await fetch(`${URL_API}/api/dogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: values }),
    });

    if (!reponse.ok) {
      toast.error("Error Creating Doggy.");
    } else {
      toast.success("Doggy Created Successfully");
      router.push("/movies");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title="New Dog">
      <h1 className="text-center mt-4">Add new Dog</h1>

      <ToastContainer theme="colored" />

      <form onSubmit={handlePostNewDog}>
        <div className="row my-3">
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={values.name}
                onChange={handleInput}
                placeholder="Add Dog Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={values.age}
                onChange={handleInput}
                placeholder="Add Dog Age"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="date">Birth date:</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={values.date}
                onChange={handleInput}
                placeholder="Add Dog Birth date"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="desc">Description: </label>
              <textarea
                type="text"
                className="form-control"
                id="desc"
                name="desc"
                value={values.desc}
                onChange={handleInput}
                placeholder="Add Dog Description"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Create Dog <i className="bi bi-arrow-rigth-square-fill" />
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default newMovie;
