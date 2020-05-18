package se.kth.sda7.wdgroupproject.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    public PostService postService;


    @PostMapping("")
    public Object create(@RequestParam("file") MultipartFile file, @RequestParam("body") String body, @RequestParam("email") String email)throws IOException {
        if (!file.isEmpty()) {
            try {
                Post  post = new Post();
                post.setBody(body);
                post.setImg(file.getBytes());
                post.setEmail(email);
                return postService.save(post);
                //return "You successfully uploaded " + name + "!";
            } catch (Exception e) {
                return "You failed to upload ";
            }
        } else {
            return "You failed to upload image";
        }

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
