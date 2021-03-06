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

  updateMovie(movie) {
    return Api.put("/movies", movie);
  }
}

export default new MovieApi();
