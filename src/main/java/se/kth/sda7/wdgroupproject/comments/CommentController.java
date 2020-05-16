package se.kth.sda7.wdgroupproject.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda7.wdgroupproject.auth.AuthService;
import se.kth.sda7.wdgroupproject.posts.Post;
import se.kth.sda7.wdgroupproject.posts.PostService;
import se.kth.sda7.wdgroupproject.user.User;
import se.kth.sda7.wdgroupproject.user.UserService;

import java.util.List;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    @Autowired
    private PostService postService;


    @PostMapping("/comments")
    public Comment postComment(@RequestBody Comment comment) {
        return commentService.create(comment);
    }

    @DeleteMapping("/comments/{id}")
    public void delete(@PathVariable Long id) {
        commentService.deleteById(id);
    }

    @GetMapping("/comments")
    public List<Comment> getAll(@RequestParam("postId") Long postId) {
        return commentService.getAllByPostId(postId);
    }

    @PostMapping("posts/{postId}/comments/{email}")
    public Comment postComment(@RequestBody Comment comment, @PathVariable Long postId, @PathVariable String email) {
        User user = userService.findUserByEmail(email);
        comment.setUser(user);
        return commentService.create(comment);
    }

    @GetMapping("/posts/comment/email")
    public String getEmail() {
        return authService.getLoggedInUserEmail();
    }

}
