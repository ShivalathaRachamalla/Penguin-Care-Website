package se.kth.sda7.wdgroupproject.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    @Autowired
    public CommentRepository commentRepository;


    public Comment create(Comment comment) {
        return commentRepository.save(comment);
    }

    public void deleteById(Long id) { commentRepository.deleteById(id);
    }


    public List<Comment> getAllByPostId(Long postId) {
        return commentRepository.findAllByPostId(postId);
    }

    public Optional<Comment> update(Comment updatedComment)  {
        return commentRepository.findById(updatedComment.getId()).map(post -> {

            return commentRepository.save(updatedComment);
        });
    };


}

