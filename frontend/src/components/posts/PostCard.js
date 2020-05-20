import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../../App.css";

import CommentList from "../comments/CommentList";

function PostCard({ userMail, post, onDeleteClick, onHandleEdit }) {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(post);
  const [img, setImg] = useState(null);
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
  const onHandleImg = (e) => {
    e.preventDefault();
    setImg(e.target.files[0]);
  };

  return (
    <div className="list-group list-group-flush">
      <div className="list-group-item">
        <div className="card">
          <div className="card-body">
            <h4 className="card-link">
              <img
                className="user-img"
                src={require("../../assets/images/login_icon.png")}
                alt="user_icon"
              />
              {post.email}
            </h4>
            {!edit ? (
              <h5 className="card-text">{post.body}</h5>
            ) : (
              <textarea
                className="card-text"
                onChange={(e) => setBody(e.target.value)}
              >
                {post.body}
              </textarea>
            )}

            <img
              className="card-img-top"
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

            <div className="card-body">
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
      </div>
    </div>
  );
}

export default PostCard;
