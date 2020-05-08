package se.kth.sda7.wdgroupproject.posts;

//import se.kth.sda.skeleton.comments.Comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PostService {

    @Autowired
    public PostRepository repository;

    public List<Post> getAll() {
        return repository.findAll();
    }

    public Optional<Post> getByID(Long id) {
        return null;
    }

    public Post save(Post post) {
        return repository.save(post);
    }

    public Optional<Post> update(Post post) {
        return null;
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }


}

