package se.kth.sda7.wdgroupproject.recepies;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RecepieRepository extends JpaRepository<Recepie, Long> {
}
