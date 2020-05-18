import Api from "./Api";

class CommentsApi {
  createComment(comment) {
    return Api.post("/comments", comment);
  }

  deleteComment(id) {
    return Api.delete("/comments/" + id);
  }

  getAllCommentsByPostId(id) {
    const params = { postId: id };
    return Api.get("/comments", { params });
  }

  updateComment(comment) {
    return Api.put("/comments", comment);
  }
}

export default new CommentsApi();
