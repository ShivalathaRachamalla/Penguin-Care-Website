import React from "react";
import MovieApi from "../api/MovieApi";
import AddMovie from "./AddMovie";
import AddMovieForm from "./AddMovieForm";

class AddMoviePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  async postMovie(movieData) {
    console.log("movieData", movieData);

    try {
      const response = await MovieApi.postMovie(movieData);
      const movie = response.data;
      const newMovies = this.state.movies.concat(movie);

      this.setState({
        movies: newMovies,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async deleteMovie(movie) {
    try {
      await MovieApi.deleteMovieById(movie.id);
      const newMovies = this.state.movies.filter((r) => r.id !== movie.id);
      this.setState({
        movies: newMovies,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async updateMovie(movieData) {
    try {
      const response = await MovieApi.updateMovie(movieData);
      const movie = response.data;
      const newMovies = this.state.movies
        .filter((r) => r.id !== movie.id)
        .concat(movie);
      this.setState({
        movies: newMovies,
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    MovieApi.getAllMovies()
      .then(({ data }) => this.setState({ movies: data }))
      .catch((err) => console.error(err));
  }

  render() {
    const movies = this.state.movies;

    return (
      <div className="card">
        <AddMovieForm onSubmit={(formData) => this.postMovie(formData)} />
        <div className="movie">
          {movies.map((movie) => (
            <AddMovie
              key={movie.id}
              movie={movie}
              onDeleteClick={() => this.deleteMovie(movie)}
              onHandleEdit={(movieData) => this.updateMovie(movieData)}
            />
          ))}{" "}
        </div>
      </div>
    );
  }
}

export default AddMoviePage;
