import React, { useState } from "react";

import { Link } from "react-router-dom";

import CommentList from "../comments/CommentList";

function PostCard({ userMail, post, onDeleteClick, onHandleEdit }) {
  /* function PostCard({post, onDeleteClick, onUpdateClick}) {*/

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(post);
<<<<<<< HEAD
  const [img, setImg] = useState(null);


    const showComments = () => {
       show ?  setShow(false): setShow(true);
    }
     const onUpdateClick = () => {
        edit ?  setEdit(false): setEdit(true);

     } 

     const handleEdit = () => {
         onHandleEdit({id:post.id, body:body})
        /* console.log(edit);
         console.log(body);
         console.log(post);*/
         setEdit(false); 
     }

     const onHandleImg = (e) => {
        e.preventDefault();
        setImg(e.target.files[0]);
      };

     return (
         <div className="card mt-3">
            <div className="card-body">
            {!edit ? (
          <>
            {" "}
            <img
              src={"data:image/png;base64, " + post.img}
              border="0"
              width="200"
            ></img>
            <h5>{post.body}</h5>{" "}
          </>
        ) : (
          <>
            <input type="file" onChange={onHandleImg} />
            <textarea onChange={(e) => setBody(e.target.value)}>
              {post.body}
            </textarea>
          </>
        )}
                <button className="btn btn-danger btn-sm mb-4 float-right" onClick={onDeleteClick}>Delete</button>
                
                {
                !edit ? <button className="btn btn-primary btn-sm mb-4 float-right mr-1" 
                onClick={onUpdateClick} >Edit</button> :
                <button className="btn btn-primary btn-sm mb-4 float-right mr-1" 
                onClick={handleEdit} >Save</button>
                }


                <div className="comment-body">
 
                <button className="btn btn-primary mt-4 btn-sm" onClick={showComments}>{show ? "HIDE COMMENTS" : "SHOW COMMENTS"}</button>
                
                { show ?  <CommentList post={post}/> : null }

                </div>

            </div>
            
=======

  const showComments = () => {
    show ? setShow(false) : setShow(true);
  };
  const onUpdateClick = () => {
    edit ? setEdit(false) : setEdit(true);
  };

  const handleEdit = () => {
    onHandleEdit({ id: post.id, body: body, email: post.email });
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
>>>>>>> master
        </div>
      </div>
    </div>
  );
}

export default PostCard;
