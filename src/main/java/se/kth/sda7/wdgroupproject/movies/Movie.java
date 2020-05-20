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

    @Column(name = "name")
    private  String name;

    @Lob
    @Column(name = "img")
    private byte[] img;

    public Movie(Long id, String body, String name, byte[] img) {
        this.id = id;
        this.body = body;
        this.name = name;
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Movie() { }


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
