package se.kth.sda7.wdgroupproject.movies;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda7.wdgroupproject.recepies.Recepie;
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}
