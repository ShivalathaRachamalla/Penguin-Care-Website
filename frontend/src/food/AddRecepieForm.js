import React, { useState } from "react";
import Axios from "axios";

function AddRecepieForm({ onSubmit }) {
  const [body, setBody] = useState("");
  // const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);

  const handleSubmit = () => {
    // Invoke the passed in event callback
    /* const reader = new FileReader();
        reader.onload = (e) => {} */
    let formData = new FormData();
    // formData.append("file", img);
    // formData.append("name", img.name);
    // formData.append("body", body);

    formData = {
      file: img,
      name: img.name,
    };

    console.log(formData);
    // Display the values

    onSubmit({ body, img: formData });

    // Axios.post("http://localhost:8080/recepies", form)
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((e) => console.error(e));

    // Clear the input field
    setBody("");
    setImg("");
  };

  const onHandleImg = (e) => {
    e.preventDefault();
    setImg(e.target.files[0]);
  };
  const imageUploadHandler = () => {};
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="font-weight-bold indigo-text py-2">
          {" "}
          Add your Recepie{" "}
        </h3>
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              value={body}
              onChange={(e) => {
                e.preventDefault();

                setBody(e.target.value);
              }}
            />
            <input type="file" onChange={onHandleImg} />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-sm" onClick={handleSubmit}>
              Add
            </button>
            {/*  <button onClick={() => imageUploadHandler}>Upload Image</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecepieForm;
