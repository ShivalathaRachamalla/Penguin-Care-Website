import React, { useState } from "react";
//import { Rating } from "material-ui-rating";

import { Link } from "react-router-dom";

function AddRecepie({ recepie, onDeleteClick, onHandleEdit }) {
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(recepie.body);
  const [name, setName] = useState(recepie.name);
  const [ingredients, setIngredients] = useState(recepie.ingredients);
  const [preparation, setPreparation] = useState(recepie.preparation);
  const [prepTime, setPrepTime] = useState(recepie.prepTime);
  //const [rating, setRating] = useState(1);
  const onUpdateClick = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  const handleEdit = () => {
    onHandleEdit({
      id: recepie.id,
      body: body,
      img: recepie.img,
      name: name,
      ingredients: ingredients,
      preparation: preparation,
      prepTime: prepTime,
    });

    setEdit(false);
  };

  return (
    <>
      <div class="recipe">
        <div class="image-txt-container">
          <img
            src={"data:image/png;base64, " + recepie.img}
            border="0"
            width="200"
          ></img>

          {edit ? (
            <>
              <p2>
                <p>
                  <font size="6" color="purple">
                    {" "}
                    <textarea onChange={(e) => setName(e.target.value)}>
                      {recepie.name}
                    </textarea>{" "}
                  </font>
                </p>
                <textarea onChange={(e) => setBody(e.target.value)}>
                  {recepie.body}
                </textarea>

                <p>
                  <font color="purple"> Ingredients: </font>
                </p>
                <p>
                  <textarea onChange={(e) => setIngredients(e.target.value)}>
                    {recepie.ingredients}
                  </textarea>
                </p>
                <p>
                  <font color="purple"> How to make it: </font>
                </p>
                <p>
                  <textarea onChange={(e) => setPreparation(e.target.value)}>
                    {recepie.preparation}
                  </textarea>
                </p>
              </p2>
              <h6>
                <font color="purple"> Preparation Time: </font>
              </h6>
              <h6>
                <textarea onChange={(e) => setPrepTime(e.target.value)}>
                  {recepie.prepTime}
                </textarea>
              </h6>
            </>
          ) : (
            <>
              <p2>
                <p>
                  <font size="6" color="purple">
                    {" "}
                    {recepie.name}{" "}
                  </font>
                </p>

                {recepie.body}

                <p>
                  <font color="purple"> Ingredients: </font>
                </p>
                <p>{recepie.ingredients}</p>
                <p>
                  <font color="purple"> How to make it: </font>
                </p>
                <p>{recepie.preparation}</p>
              </p2>
              <h6>
                <font color="purple"> Preparation Time: </font>
              </h6>
              <h6>{"  " + recepie.prepTime}</h6>
            </>
          )}
        </div>
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
    </>
  );
}

export default AddRecepie;
