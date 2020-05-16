package se.kth.sda7.wdgroupproject.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda7.wdgroupproject.movies.Movie;
import se.kth.sda7.wdgroupproject.movies.MovieRepository;

import java.util.List;
@Service
public class MovieService {
    @Autowired
    public MovieRepository repository;

    public List<Movie> getAll() {

        return repository.findAll();
    }


    public Movie save(Movie newMovie) {
        return repository.save(newMovie);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public Movie update(Movie movie) throws Exception {
        return repository.findById(movie.getId()).map(r -> {
            return repository.save(movie);
        }).orElseThrow(() -> new Exception("Movie not found"));
    }
}
