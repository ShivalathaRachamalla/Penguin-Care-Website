import React, { useState } from "react";

import { Link } from "react-router-dom";

import CommentList from '../comments/CommentList';

function PostCard({post, onDeleteClick}) {


  const [show, setShow ] = useState(false);

    const showComments = () => {
       show ?  setShow(false): setShow(true);
    }
    

    return (
        <div className="card mt-3">
            <div className="card-body">
                    {post.body}
                <button className="btn btn-danger btn-sm mb-4 float-right" onClick={onDeleteClick}>Delete</button>


                <div className="comment-body">
 
                <button className="btn btn-primary mt-4 btn-sm" onClick={showComments}>{show ? "HIDE COMMENTS" : "SHOW COMMENTS"}</button>
                
                { show ?  <CommentList post={post}/> : null }

                </div>

            </div>
            
        </div>
    );
}

export default PostCard;

