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
<<<<<<< HEAD
        repository.deleteById(id);
    }

    public OutdoorActivity update(OutdoorActivity activity) throws Exception {
        return repository.findById(activity.getId()).map(r -> {
            return repository.save(activity);
        }).orElseThrow(() -> new Exception("Movie not found"));
=======

    }

    public OutdoorActivity update(OutdoorActivity outdoorActivity) throws Exception {
        return repository.findById(outdoorActivity.getId()).map(r -> {
            return repository.save(outdoorActivity);
        }).orElseThrow(() -> new Exception("Activity not found"));

>>>>>>> master
    }
}

