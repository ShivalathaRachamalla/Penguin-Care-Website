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

        public Recepie() {

        }

        public Recepie(String body) {
            this.body = body;
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
