import React, { useState } from "react";

function AddRecepieForm({ onSubmit }) {
  const [body, setBody] = useState("");
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [prepTime, setPrepTime] = useState("");

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("file", img);
    formData.append("body", body);
    formData.append("name", name);
    formData.append("ingredients", ingredients);
    formData.append("preparation", preparation);
    formData.append("prepTime", prepTime);

    //formData.append("name", img.name);

    console.log(formData);

    onSubmit(formData);
    setBody("");
    setImg(null);
    setName("");
    setIngredients("");
    setPreparation("");
    setPrepTime("");
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
            {" "}
            <h6>Name of the Recipe:</h6>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                e.preventDefault();

                setName(e.target.value);
              }}
            />{" "}
            <h6>Health Benefits:</h6>
            <textarea
              className="form-control"
              value={body}
              onChange={(e) => {
                e.preventDefault();

                setBody(e.target.value);
              }}
            />{" "}
            <h6>Ingredients: </h6>
            <textarea
              className="form-control"
              value={ingredients}
              onChange={(e) => {
                e.preventDefault();

                setIngredients(e.target.value);
              }}
            />{" "}
            <h6>Preparation:</h6>
            <textarea
              className="form-control"
              value={preparation}
              onChange={(e) => {
                e.preventDefault();

                setPreparation(e.target.value);
              }}
            />{" "}
            <h10>Preparation Time:</h10>
            <textarea
              className="form-control"
              value={prepTime}
              onChange={(e) => {
                e.preventDefault();

                setPrepTime(e.target.value);
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
