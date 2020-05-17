package se.kth.sda7.wdgroupproject.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import se.kth.sda7.wdgroupproject.movies.Movie;
import se.kth.sda7.wdgroupproject.movies.MovieService;
import se.kth.sda7.wdgroupproject.recepies.Recepie;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {
    @Autowired
    public MovieService movieService;

@PostMapping("")
    public Movie create(@RequestParam("file") MultipartFile file, @RequestParam("body") String body) throws IOException {
        Movie movie = new Movie();
        movie.setBody(body);
        movie.setImg(file.getBytes());
        return movieService.save(movie);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        movieService.deleteById(id);
    }

    @GetMapping("")
    public List<Movie> getAll(){ return movieService.getAll();
    }

    @PutMapping("")
    public Movie update(@RequestParam("file") MultipartFile file, @RequestParam("body") String body, @RequestParam("id") Long id) throws Exception {
        Movie  movie = new Movie();
        movie.setId(id);
        movie.setBody(body);
        movie.setImg(file.getBytes());
        return movieService.update(movie);
    }

}
