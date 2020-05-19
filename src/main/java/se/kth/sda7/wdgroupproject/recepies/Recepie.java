package se.kth.sda7.wdgroupproject.recepies;

import javax.persistence.*;

@Entity
@Table(name = "recepie")

public class Recepie {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "body")
    private String body;

    @Column(name = "name")
    private String name;

    @Column(name = "ingredients")
    private String ingredients;

    @Column(name = "preparation")
    private String preparation;

    @Column(name = "prepTime")
    private String prepTime;

    @Lob
    @Column(name = "img")
    private byte[] img;

    public Recepie(Long id, String body, String name, String ingredients, String preparation, String prepTime,
            byte[] img) {
        this.id = id;
        this.body = body;
        this.name = name;
        this.ingredients = ingredients;
        this.preparation = preparation;
        this.prepTime = prepTime;
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getPreparation() {
        return preparation;
    }

    public void setPreparation(String preparation) {
        this.preparation = preparation;
    }

    public String getPrepTime() {
        return prepTime;
    }

    public void setPrepTime(String prepTime) {
        this.prepTime = prepTime;
    }

    public Recepie() {
    }

    public Recepie(String body) {
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
