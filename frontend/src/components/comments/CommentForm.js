import React, { Component } from 'react';

import CommentList from './CommentList';

function CommentForm({onSubmit}) {
    const [body, setBody] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({body: body});

        setBody("");
    };

    return(
            <div>
                <p className="font-weight-bold indigo-text py-2" >Write comments below</p>
                <div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>


                    <div className="form-group">
                        <button 
                            className="btn btn-primary btn-sm" 
                            onClick={handleSubmit}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        

        
    )
}

export default CommentForm;
