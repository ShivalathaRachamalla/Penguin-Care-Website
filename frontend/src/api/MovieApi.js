import Api from "./Api";

class MovieApi {
  getAllMovies() {
    return Api.get("/movies");
  }

  postMovie(movie) {
    console.log(movie, "......");

    return Api.post("/movies", movie, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  deleteMovieById(id) {
    return Api.delete("/movies/" + id);
  }

  updateRecepie(movie) {
    console.log(movie, "u");
    return Api.put("/movies", movie, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
}

export default new MovieApi();
