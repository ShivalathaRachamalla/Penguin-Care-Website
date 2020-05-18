package se.kth.sda7.wdgroupproject.outdooractivities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda7.wdgroupproject.recepies.Recepie;

@Repository
public interface OutdoorActivityRepository extends JpaRepository<OutdoorActivity, Long> {
}


