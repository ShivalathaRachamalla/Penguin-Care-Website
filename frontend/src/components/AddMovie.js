import React, { useState } from "react";

import { Link } from "react-router-dom";

function AddMovie({ movie, onDeleteClick, onHandleEdit }) {
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(movie.body);
  const [name, setName] = useState(movie.name);
  const onUpdateClick = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  const handleEdit = () => {
    onHandleEdit({ id: movie.id, name: name, body: body, img: movie.img });
    setEdit(false);
  };

  return (
    <div className="movie">
      <div class="image-txt-container">
        <div className="trial">
          {!edit ? (
            <>
              <font size="5" color="brown">
                {" "}
                <li>
                  <b> {movie.name} </b>
                </li>
              </font>
              <p>{movie.body}</p>
            </>
          ) : (
            <>
              <font size="5" color="brown">
                {" "}
                <li>
                  <b>
                    <textarea onChange={(e) => setName(e.target.value)}>
                      {movie.name}
                    </textarea>
                  </b>
                </li>
              </font>

              <p>
                <textarea onChange={(e) => setBody(e.target.value)}>
                  {movie.body}
                </textarea>
              </p>
            </>
          )}

          <img
            src={"data:image/png;base64, " + movie.img}
            alt="activity d image"
            width="600"
            height="350"
            align="center"
          />
        </div>
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
