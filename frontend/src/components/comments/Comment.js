import React, { Component } from "react";

function Comment({ comment, onDeleteClick, activeMail }) {
  return (
    <div>
      <p>{"User Name :" + comment.email}</p>
      <p>{comment.body}</p>
      {comment.email == activeMail ? (
        <button className="btn btn-danger btn-sm" onClick={onDeleteClick}>
          Delete comment
        </button>
      ) : null}
    </div>
  );
}

export default Comment;
