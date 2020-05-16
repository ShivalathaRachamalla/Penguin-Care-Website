package se.kth.sda7.wdgroupproject.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda7.wdgroupproject.auth.AuthService;
import se.kth.sda7.wdgroupproject.user.User;
import se.kth.sda7.wdgroupproject.user.UserService;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    public PostService postService;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    @PostMapping("")
    public Post create(@RequestBody Post newPost) {
        return postService.save(newPost);
    }

    @PostMapping("/{email}")
    public Post savePost(@RequestBody Post newPost, @PathVariable String email) {
        User user = userService.findUserByEmail(email);
        newPost.setUser(user);
        return postService.save(newPost);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        postService.deleteById(id);
    }

    @GetMapping("")
    public List<Post> getAll() {
        return postService.getAll();
    }

    @GetMapping("/email")
    public String getEmail() {
        return authService.getLoggedInUserEmail();
    }

    /*
     * @PutMapping("/{id}") public Post update(@PathVariable Long id, @RequestBody
     * Post updatedPost) throws Exception { return postService.update(id,
     * updatedPost); }
     */
    @PutMapping("")
    public Post update(@RequestBody Post updatedPost) throws Exception {
        return postService.update(updatedPost);
    }

}
