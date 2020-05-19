package se.kth.sda7.wdgroupproject.outdooractivities;

import javax.persistence.*;



@Entity
@Table(name = "outdooractivity")

public class OutdoorActivity {
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

    public OutdoorActivity(Long id, String body, String name, byte[] img) {
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

    public OutdoorActivity() { }

    public OutdoorActivity(String body) {
        this.body = body;
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

