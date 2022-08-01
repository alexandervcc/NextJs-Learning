import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import UploadImage from "@/components/UploadImage";
import { URL_API } from "@/config/index";
import { useRouter } from "next/router";
import { useState } from "react";

const editDog = ({ updatedDog }) => {
  const router = useRouter();

  const [values, setValues] = useState({
    name: updatedDog.data.attributes.name,
    desc: updatedDog.data.attributes.desc,
    age: updatedDog.data.attributes.age,
    date: updatedDog.data.attributes.date,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handlePutUpdateDog = async (e) => {
    e.preventDefault();
    const emptyValues = Object.values(values).some((element) => element === "");

    if (emptyValues) {
      toast.error("Empty values, provide one.");
      return;
    }

    const reponse = await fetch(`${URL_API}/api/dogs/${updatedDog.data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: values }),
    });

    if (!reponse.ok) {
      toast.error("Error Updating Doggy.");
    } else {
      toast.success("Doggy Updated Successfully");
      router.push("/movies");
    }
  };

  const uploadedDogImage = async (e) => {
    setShowModal(false);
    toast.success("Image Uploaded Successfully!");
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <Layout title="Edit Dog">
      <ToastContainer theme="colored" />
      <h1 className="text-center mt-4">Update Dog: {updatedDog.name}</h1>
      <form onSubmit={handlePutUpdateDog}>
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
            Update Dog <i className="bi bi-arrow-rigth-square-fill" />
          </button>
        </div>
      </form>
      <div className="row mb-3">
        <div className="col-sm-6 offset-3">
          <div className="text-center0">
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-secondary w-100"
            >
              <i className="bi bi-image-fill" /> Asign Image
            </button>
          </div>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <UploadImage
              idDog={updatedDog.data.id}
              uploadedImage={uploadedDogImage}
            />
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default editDog;

//getServerSideProps
export const getServerSideProps = async ({ params: { id } }) => {
  const res = await fetch(`${URL_API}/api/dogs/${id}?populate=*`);
  const doggy = await res.json();

  return {
    props: { updatedDog: doggy },
  };
};
