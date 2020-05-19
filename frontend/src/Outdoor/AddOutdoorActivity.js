import React, { useState } from "react";

import { Link } from "react-router-dom";

function AddOutdoorActivity({ outdooractivity, onDeleteClick, onHandleEdit }) {
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(outdooractivity.body);
  const [name, setName] = useState(outdooractivity.name);
  const onUpdateClick = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  const handleEdit = () => {
    onHandleEdit({
      id: outdooractivity.id,
      name: name,
      body: body,
      img: outdooractivity.img,
    });
    setEdit(false);
  };

  return (
    <div className="recipe">
      <div class="image-txt-container">
        <img
          src={"data:image/png;base64, " + outdooractivity.img}
          border="0"
          width="200"
        ></img>
        <p2 class="margin">
          {!edit ? (
            <>
              <p>
                {" "}
                <font size="6" color="purple">
                  {" "}
                  {outdooractivity.name}{" "}
                </font>{" "}
              </p>
              {outdooractivity.body}
            </>
          ) : (
            <>
              <p>
                <font size="6" color="purple">
                  <textarea onChange={(e) => setName(e.target.value)}>
                    {outdooractivity.name}
                  </textarea>
                </font>
              </p>

              <textarea onChange={(e) => setBody(e.target.value)}>
                {outdooractivity.body}
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
        </p2>
      </div>
    </div>
  );
}

export default AddOutdoorActivity;
