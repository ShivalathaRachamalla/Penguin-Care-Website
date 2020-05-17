package se.kth.sda7.wdgroupproject.movies;

import javax.persistence.*;


@Entity
@Table(name = "movie")
public class Movie {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "body")
    private String body;



    @Lob
    @Column(name = "img")
    private byte[] img;

    public Movie() { }

    public Movie(String body) {
        this.body = body;
    }

    public Movie(Long id, String body, byte[] img) {
        this.id = id;
        this.body = body;
        this.img = img;
    }

    public void setImg(byte[] img) {
        this.img = img;
    }

    // public MultipartFile getImg() {
    public byte[] getImg() {

        return img;
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

}
