package se.kth.sda7.wdgroupproject.posts;

import se.kth.sda7.wdgroupproject.comments.Comment;

import javax.persistence.*;

@Entity
@Table(name = "post")

public class Post {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "body")
    private String body;

    @Column(name = "email")
    private  String email;

    public Post() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Post(String body, String email) {
        this.body = body;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void addComment(Comment comment) {
    }
}
