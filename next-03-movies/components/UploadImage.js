import styles from "@/styles/UploadImage.module.css";
import { useState } from "react";
import { URL_API } from "../config/index";

const UploadImage = ({ idDog, uploadedImage }) => {
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "api::dog.dog");
    formData.append("refId", idDog);
    formData.append("field", "image");

    const resFetchImage = await fetch(`${URL_API}/api/upload`, {
      method: "POST",
      body: formData,
    });

    if(resFetchImage.ok){
      alert("Perfect!")
      uploadedImage()
    }else{
      alert("Error Uploading Image")
    }
  };

  const handleFile = async (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h3 className="text-center">Load the Dog Image</h3>
      <form onSubmit={handleUpload}>
        <div className={styles.file}>
          <input type="file" className="form-control" onChange={handleFile} />
          <button type="submit" className="btn btn-primary mt-3 w-100">
            <i className="bi bi-cloud-arrow-up-fill">Upload and Asign Image</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
