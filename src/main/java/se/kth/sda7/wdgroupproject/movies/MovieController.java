package se.kth.sda7.wdgroupproject.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {
    @Autowired
    public MovieService movieService;

@PostMapping("")
    public Movie create(@RequestParam("file") MultipartFile file, @RequestParam("body") String body, @RequestParam("name") String name) throws IOException {
        Movie movie = new Movie();
        movie.setBody(body);
        movie.setName(name);
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
    public Movie update(@RequestBody Movie movie) throws Exception {
        return movieService.update(movie);
    }

}
