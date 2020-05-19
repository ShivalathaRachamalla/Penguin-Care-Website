import React, { useState } from "react";

import CommentList from "../comments/CommentList";

function PostCard({ userMail, post, onDeleteClick, onHandleEdit }) {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(post);
  const showComments = () => {
    show ? setShow(false) : setShow(true);
  };
  const onUpdateClick = () => {
    edit ? setEdit(false) : setEdit(true);
  };

  const handleEdit = () => {
    onHandleEdit({ id: post.id, body: body, email: post.email, img: post.img });
    setEdit(false);
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4>{"UserName: " + post.email}</h4>
        {!edit ? (
          <h5>{post.body}</h5>
        ) : (
          <textarea onChange={(e) => setBody(e.target.value)}>
            {post.body}
          </textarea>
        )}

        <img
          src={"data:image/png;base64, " + post.img}
          border="0"
          width="200"
        ></img>
        {post.email == userMail ? (
          <button
            className="btn btn-danger btn-sm mb-4 float-right"
            onClick={onDeleteClick}
          >
            Delete
          </button>
        ) : null}

        {post.email == userMail ? (
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

        <div className="comment-body">
          <button
            className="btn btn-primary mt-4 btn-sm"
            onClick={showComments}
          >
            {show ? "HIDE COMMENTS" : "SHOW COMMENTS"}
          </button>

          {show ? <CommentList mail={userMail} post={post} /> : null}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
