import React, { useState } from "react";

import { Link } from "react-router-dom";

function AddMovie({ movie, onDeleteClick, onHandleEdit }) {
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(movie);
  const [img, setImg] = useState(null);
  const onUpdateClick = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  const handleEdit = () => {
    let movieData = new FormData();
    movieData.append("id", movie.id);
    movieData.append("file", img);
    movieData.append("body", body);
    onHandleEdit(movieData);
    setEdit(false);
    setImg(null);
  };
  const onHandleImg = (e) => {
    e.preventDefault();
    setImg(e.target.files[0]);
  };
  return (
    <div className="movie">
      <div class="image-txt-container">
        {!edit ? (
          <>
            {" "}
            <img
              src={"data:image/png;base64, " + movie.img}
              border="0"
              width="200"
            ></img>
            <h5>{movie.body}</h5>{" "}
          </>
        ) : (
          <>
            <input type="file" onChange={onHandleImg} />
            <textarea onChange={(e) => setBody(e.target.value)}>
              {movie.body}
            </textarea>
          </>
        )}

        <button
          className="btn btn-danger btn-sm mb-4 float-right"
          onClick={onDeleteClick}
        >
          Delete
        </button>
        {!edit ? (
          <button
            className="btn btn-primary btn-sm mb-4 float-right"
            onClick={onUpdateClick}
          >
            Edit
          </button>
        ) : (
          <button
            className="btn btn-primary btn-sm mb-4 float-right mr-1"
            onClick={handleEdit}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default AddMovie;
