import React,{useState} from "react";

function PostForm({ onSubmit,email }) {
  const [body, setBody] = useState("");
  const [img, setImg] = useState(null);
  

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("file", img);
    formData.append("body", body);
    formData.append("email", email)
    // Invoke the passed in event callback
    onSubmit(formData);

    // Clear the input field
    setBody("");
    setImg(null);
  };

  const onHandleImg = (e) => {
    e.preventDefault();
    setImg(e.target.files[0]);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="font-weight-bold indigo-text py-2">
          Post what do you know about Corona situation and help parents!
        </h3>
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <input type="file" onChange={onHandleImg} />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-sm" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
