package se.kth.sda7.wdgroupproject.outdooractivities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OutdoorActivityService {

    @Autowired
    public OutdoorActivityRepository repository;

    public List<OutdoorActivity> getAll() {

        return repository.findAll();
    }

    public OutdoorActivity save(OutdoorActivity newOutdoorActivity) {
        return repository.save(newOutdoorActivity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public OutdoorActivity update(OutdoorActivity activity) throws Exception {
        return repository.findById(activity.getId()).map(r -> {
            return repository.save(activity);
        }).orElseThrow(() -> new Exception("Movie not found"));
    }
}

