package se.kth.sda7.wdgroupproject.posts;

import se.kth.sda7.wdgroupproject.comments.Comment;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "post")

public class Post {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "body")
    private String body;


    public byte[] getImg() {
        return img;
    }

    public void setImg(byte[] img) {
        this.img = img;
    }

   // @Lob
    @Column(name = "img")
    @Basic(optional = true)
    private byte[] img;

    // @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    // private List<Comment> comments = new ArrayList<>();



    @NotEmpty(message = "should not be empty")
    @Column(name = "email")
    private  String email;


    public Post() {
    }


    public Post(String body, byte[] img,String email) {
        this.body = body;
        this.img = img;
        this.email = email;
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
