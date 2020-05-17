import React, { useState, Component } from "react";

function Comment({ comment, onDeleteClick, activeMail, onHandleEdit }) {
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(comment);

  const onUpdateClick = () => {
    edit ? setEdit(false) : setEdit(true);
  };

  const handleEdit = () => {
    onHandleEdit({ id: comment.id, body: body, email: comment.email });
    setEdit(false);
  };

  return (
    <div>
      <p>{"User Name :" + comment.email}</p>

      {!edit ? (
        <h5>{comment.body}</h5>
      ) : (
        <textarea onChange={(e) => setBody(e.target.value)}>
          {comment.body}
        </textarea>
      )}

      {comment.email == activeMail ? (
        !edit ? (
          <button
            className="btn btn-primary btn-sm mb-4 float-right mr-1"
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
        )
      ) : null}

      {comment.email == activeMail ? (
        <button className="btn btn-danger btn-sm" onClick={onDeleteClick}>
          Delete comment
        </button>
      ) : null}
    </div>
  );
}

export default Comment;
