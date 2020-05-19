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



    @Lob
    @Column(name = "img")
    private byte[] img;

    public OutdoorActivity() { }

    public OutdoorActivity(String body) {
        this.body = body;
    }

    public OutdoorActivity(Long id, String body, byte[] img) {
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

