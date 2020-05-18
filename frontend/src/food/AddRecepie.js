import React, { useState } from "react";

import { Link } from "react-router-dom";

function AddRecepie({ recepie, onDeleteClick, onHandleEdit }) {
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(recepie);
  
  const onUpdateClick = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  const handleEdit = () => {
    onHandleEdit({ id: recepie.id, body: body, img:recepie.img });
    setEdit(false);
    //let formData = new FormData();
    //formData.append("id", recepie.id);
    //formData.append("file", recepie.img);
    //formData.append("body", body);
    //onHandleEdit(formData);
    //setEdit(false);
  };
  
    
  
  return (
    <div className="recipe">
      <div class="image-txt-container">
      <img
              src={"data:image/png;base64, " + recepie.img}
              border="0"
              width="200"
            ></img>
        {!edit ? (
          <>
            {" "}
            
            <h5>{recepie.body}</h5>{" "}
          </>
        ) : (
          <>
            
            <textarea onChange={(e) => setBody(e.target.value)}>
              {recepie.body}
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

export default AddRecepie;
