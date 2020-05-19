import React, { useState } from "react";

function AddOutdoorActivityForm({ onSubmit }) {
  const [body, setBody] = useState("");
  // const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("file", img);
    formData.append("body", body);

    onSubmit(formData);
    setBody("");
    setImg(null);
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
          Add your OutdoorActivity{" "}
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

export default AddOutdoorActivityForm;
