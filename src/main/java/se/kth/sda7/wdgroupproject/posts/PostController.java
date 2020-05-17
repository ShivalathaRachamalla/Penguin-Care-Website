package se.kth.sda7.wdgroupproject.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import se.kth.sda7.wdgroupproject.recepies.Recepie;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    public PostService postService;

    @PostMapping("")
    public Post create(@RequestBody Post newPost) {
        return postService.save(newPost);
    }
    @PostMapping("")
    public Post create(@RequestParam("file") MultipartFile file, @RequestParam("body") String body,@RequestParam("email") String email)throws IOException {
        Post  post = new Post();
        post.setBody(body);
        post.setImg(file.getBytes());
        post.setEmail(email);
        return postService.save(post);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        postService.deleteById(id);
    }

    @GetMapping("")
    public List<Post> getAll() {
        return postService.getAll();
    }

    @PutMapping("")
    public Post update(@RequestBody Post updatedPost) throws Exception {
        return postService.update(updatedPost);
    }

}
