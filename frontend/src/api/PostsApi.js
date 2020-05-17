import Api from "./Api";

class PostsApi {
  getAllPosts() {
    return Api.get("/posts");
  }

  getPostById(id) {
    return Api.get("/posts/" + id);
  }

  createPost(post) {
    console.log(post,"post")
    return Api.post("/posts", post, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
    

  updatePost(post) {
    return Api.put("/posts", post);
  }

  deletePost(id) {
    return Api.delete("/posts/" + id);
  }
}

export default new PostsApi();
