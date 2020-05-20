import React, { useState } from "react";

function AddOutdoorActivityForm({ onSubmit }) {
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("file", img);
    formData.append("name", name);
    formData.append("body", body);

    onSubmit(formData);

    setBody("");
    setImg(null);
    setName("");
  };

  const onHandleImg = (e) => {
    e.preventDefault();
    setImg(e.target.files[0]);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="font-weight-bold indigo-text py-2">
          {" "}
          Add your OutdoorActivity{" "}
        </h3>
        <div>
          <div className="form-group">
            Activity Name:
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                e.preventDefault();

                setName(e.target.value);
              }}
            />
            Description:
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOutdoorActivityForm;
