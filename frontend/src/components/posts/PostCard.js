import React, { useState } from "react";

import { Link } from "react-router-dom";

import CommentList from '../comments/CommentList';

function PostCard({post, onDeleteClick, handleEdit}) {
   /* function PostCard({post, onDeleteClick, onUpdateClick}) {*/


  const [show, setShow ] = useState(false);
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(post.body);



    const showComments = () => {
       show ?  setShow(false): setShow(true);
    }
     const onUpdateClick = () => {
        edit ?  setEdit(false): setEdit(true);

     } 

     return (
         <div className="card mt-3">
            <div className="card-body">
    { !edit ?  <h5>{post.body}</h5> :
         /* <textarea value={edit}
          onChange={e => setEdit(e.target.value)} >{post.body}</textarea>*/
     <textarea>{post.body}</textarea>
    }
                <button className="btn btn-danger btn-sm mb-4 float-right" onClick={onDeleteClick}>Delete</button>
                
                {
                !edit ? <button className="btn btn-danger btn-sm mb-4 float-right" 
                onClick={onUpdateClick} >Edit</button> :
                <button className="btn btn-danger btn-sm mb-4 float-right" 
                onClick={handleEdit} >Save</button>
                }


                <div className="comment-body">
 
                <button className="btn btn-primary mt-4 btn-sm" onClick={showComments}>{show ? "HIDE COMMENTS" : "SHOW COMMENTS"}</button>
                
                { show ?  <CommentList post={post}/> : null }

                </div>

            </div>
            
        </div>
    );
}

export default PostCard;

