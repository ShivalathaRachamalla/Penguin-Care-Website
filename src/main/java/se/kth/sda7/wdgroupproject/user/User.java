package se.kth.sda7.wdgroupproject.user;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "account")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;

    @Length(min = 5, max = 100, message = "Password length most be between 5-100 characters")
    @Column(name = "password")
    private String password;

    @Length(min = 3, max = 100, message = "Name must be between 3-100 characters")
    @Column(name = "firstName")
    private String firstName;

    @Length(min = 3, max = 100, message = "Name must be between 3-100 characters")
    @Column(name = "lastName")
    private String lastName;

    // @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    // private List<Post> posts = new ArrayList<>();

    // @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    // private List<Comment> comments = new ArrayList<>();

    // Hibernate needs a default constructor to function
    public User() {
    }

    public User(
            @Email(message = "Invalid email address! Please provide a valid email address") @NotEmpty(message = "Please provide an email address") String email,
            @Length(min = 5, max = 100, message = "Password length most be between 5-100 characters") String password,
            @Length(min = 3, max = 100, message = "firstName must be between 3-100 characters") String firstName,
            @Length(min = 3, max = 100, message = "lastName must be between 3-100 characters") String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;

    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

}
